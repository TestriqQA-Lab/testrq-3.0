"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  getCountries,
  getCountryCallingCode,
  parsePhoneNumberFromString,
  type CountryCode,
} from "libphonenumber-js";

export type PhoneInputProps = {
  value?: string;
  onChange: (value: string | undefined) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  className?: string;
  placeholder?: string;
  international?: boolean;
  countryCallingCodeEditable?: boolean;
  defaultCountry?: CountryCode;
  numberInputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const COUNTRY_OPTIONS = getCountries()
  .map((code) => ({ code, callingCode: getCountryCallingCode(code) }))
  .sort((a, b) => a.code.localeCompare(b.code));

export default function PhoneInput({
  value,
  onChange,
  onBlur,
  className = "",
  placeholder,
  defaultCountry = "IN",
  numberInputProps = {},
}: PhoneInputProps) {
  const derivedCountry = useMemo<CountryCode>(() => {
    if (value) {
      const parsed = parsePhoneNumberFromString(value);
      if (parsed?.country) return parsed.country;
    }
    return defaultCountry;
  }, [value, defaultCountry]);

  const [country, setCountry] = useState<CountryCode>(derivedCountry);

  useEffect(() => {
    setCountry(derivedCountry);
  }, [derivedCountry]);

  const nationalDisplay = useMemo(() => {
    if (!value) return "";
    const parsed = parsePhoneNumberFromString(value);
    if (parsed) return parsed.formatNational();
    const callingCode = "+" + getCountryCallingCode(country);
    if (value.startsWith(callingCode)) return value.slice(callingCode.length);
    return value;
  }, [value, country]);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const next = e.target.value as CountryCode;
    setCountry(next);
    const digits = nationalDisplay.replace(/\D/g, "");
    if (digits) {
      onChange("+" + getCountryCallingCode(next) + digits);
    } else {
      onChange(undefined);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "");
    if (!digits) {
      onChange(undefined);
      return;
    }
    onChange("+" + getCountryCallingCode(country) + digits);
  };

  const { className: inputClassName, ...restInputProps } = numberInputProps;
  const finalInputClassName = inputClassName
    ? `PhoneInputInput ${inputClassName}`
    : "PhoneInputInput";

  return (
    <div className={`PhoneInput ${className}`.trim()}>
      <select
        aria-label="Country code"
        className="PhoneInputCountrySelect"
        value={country}
        onChange={handleCountryChange}
      >
        {COUNTRY_OPTIONS.map(({ code, callingCode }) => (
          <option key={code} value={code}>
            {code} +{callingCode}
          </option>
        ))}
      </select>
      <input
        type="tel"
        className={finalInputClassName}
        placeholder={placeholder}
        value={nationalDisplay}
        onChange={handleInputChange}
        onBlur={onBlur}
        {...restInputProps}
      />
    </div>
  );
}
