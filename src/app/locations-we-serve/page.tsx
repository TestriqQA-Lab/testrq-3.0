"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaGlobe,
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronUp,
  FaSearch,
  FaExternalLinkAlt,
  FaCity,
  FaFlag,
} from "react-icons/fa";

import { locationData, LocationData } from "../lib/LocationData"; // adjust path if needed


const LocationsWeServe: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [expandedCountries, setExpandedCountries] = useState<Set<string>>(
    new Set()
  );
  const [expandedStates, setExpandedStates] = useState<Set<string>>(new Set());


  const toggleCountryExpansion = (country: string) => {
    const newExpanded = new Set(expandedCountries);
    if (newExpanded.has(country)) {
      newExpanded.delete(country);
    } else {
      newExpanded.add(country);
    }
    setExpandedCountries(newExpanded);
  };

  const toggleStateExpansion = (state: string) => {
    const newExpanded = new Set(expandedStates);
    if (newExpanded.has(state)) {
      newExpanded.delete(state);
    } else {
      newExpanded.add(state);
    }
    setExpandedStates(newExpanded);
  };

  const getLocationName = (url: string): string => {
    const parts = url.split("-in-");
    if (parts.length > 1) {
      return parts[1]
        .split("/")[0]
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
    }
    return url;
  };

  const filterLocations = () => {
    if (!searchTerm.trim()) return locationData;

    const filtered: LocationData = {};

    Object.entries(locationData).forEach(([country, states]) => {
      Object.entries(states).forEach(([state, cities]) => {
        Object.entries(cities).forEach(([city, urls]) => {
          const cityName = city.toLowerCase();
          const stateName = state.toLowerCase();
          const countryName = country.toLowerCase();
          const search = searchTerm.toLowerCase();

          if (
            cityName.includes(search) ||
            stateName.includes(search) ||
            countryName.includes(search)
          ) {
            if (!filtered[country]) filtered[country] = {};
            if (!filtered[country][state]) filtered[country][state] = {};
            filtered[country][state][city] = urls;
          }

          // Also search in subcities
          if (Array.isArray(urls)) {
            const matchingUrls = urls.filter((url) =>
              getLocationName(url).toLowerCase().includes(search)
            );
            if (matchingUrls.length > 0) {
              if (!filtered[country]) filtered[country] = {};
              if (!filtered[country][state]) filtered[country][state] = {};
              filtered[country][state][city] = matchingUrls;
            }
          }
        });
      });
    });

    return filtered;
  };

  const filteredData = filterLocations();
  const totalLocations = Object.values(locationData).reduce(
    (total, states) =>
      total +
      Object.values(states).reduce(
        (stateTotal, cities) =>
          stateTotal +
          Object.values(cities).reduce(
            (cityTotal, urls) =>
              cityTotal + (Array.isArray(urls) ? urls.length : 1),
            0
          ),
        0
      ),
    0
  );

  return (
    <section className="py-16 bg-gray-50 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaGlobe className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Global Reach</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Locations We{" "}
            <span className="text-[theme(color.brand.blue)]">Serve</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover our comprehensive QA testing services across major cities
            and regions. We provide world-class software testing solutions
            tailored to local market needs.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <FaFlag className="w-4 h-4 text-[theme(color.brand.blue)]" />
              <span>
                <strong>{Object.keys(locationData).length}</strong> Countries
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="w-4 h-4 text-[theme(color.brand.blue)]" />
              <span>
                <strong>
                  {Object.values(locationData).reduce(
                    (total, states) => total + Object.keys(states).length,
                    0
                  )}
                </strong>{" "}
                States/Regions
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaCity className="w-4 h-4 text-[theme(color.brand.blue)]" />
              <span>
                <strong>{totalLocations}+</strong> Locations
              </span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
          <div className="max-w-2xl mx-auto">
            <label className="block text-sm font-medium text-gray-700 mb-4 text-center">
              Search for your city, state, or country
            </label>
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search locations... (e.g., Mumbai, Maharashtra, India)"
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:border-transparent transition-all duration-300 text-lg"
              />
            </div>
            {searchTerm && (
              <p className="text-sm text-gray-500 mt-2 text-center">
                Found locations in {Object.keys(filteredData).length} countries
              </p>
            )}
          </div>
        </div>

        {/* Locations Grid */}
        <div className="space-y-8">
          {Object.entries(filteredData).map(([country, states]) => (
            <div
              key={country}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              {/* Country Header */}
              <div
                className="bg-gradient-to-r from-[theme(color.brand.blue)] to-blue-700 text-white p-6 cursor-pointer hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                onClick={() => toggleCountryExpansion(country)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <FaFlag className="w-6 h-6" />
                    <div>
                      <h2 className="text-2xl font-bold">{country}</h2>
                      <p className="text-blue-100 text-sm">
                        {Object.keys(states).length} states •{" "}
                        {Object.values(states).reduce(
                          (total, cities) => total + Object.keys(cities).length,
                          0
                        )}{" "}
                        cities
                      </p>
                    </div>
                  </div>
                  {expandedCountries.has(country) ? (
                    <FaChevronUp className="w-5 h-5" />
                  ) : (
                    <FaChevronDown className="w-5 h-5" />
                  )}
                </div>
              </div>

              {/* States */}
              {expandedCountries.has(country) && (
                <div className="p-6">
                  <div className="space-y-4">
                    {Object.entries(states).map(([state, cities]) => (
                      <div
                        key={state}
                        className="border border-gray-200 rounded-xl overflow-hidden"
                      >
                        {/* State Header */}
                        <div
                          className="bg-gray-50 p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                          onClick={() => toggleStateExpansion(state)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <FaMapMarkerAlt className="w-5 h-5 text-[theme(color.brand.blue)]" />
                              <div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                  {state}
                                </h3>
                                <p className="text-sm text-gray-600">
                                  {Object.keys(cities).length} cities
                                </p>
                              </div>
                            </div>
                            {expandedStates.has(state) ? (
                              <FaChevronUp className="w-4 h-4 text-gray-500" />
                            ) : (
                              <FaChevronDown className="w-4 h-4 text-gray-500" />
                            )}
                          </div>
                        </div>

                        {/* Cities */}
                        {expandedStates.has(state) && (
                          <div className="p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {Object.entries(cities).map(([city, urls]) => (
                                <div
                                  key={city}
                                  className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                                >
                                  <div className="flex items-center gap-2 mb-3">
                                    <FaCity className="w-4 h-4 text-[theme(color.brand.blue)]" />
                                    <h4 className="font-semibold text-gray-900">
                                      {city}
                                    </h4>
                                  </div>

                                  {Array.isArray(urls) ? (
                                    <div className="space-y-2">
                                      <p className="text-xs text-gray-500 mb-2">
                                        {urls.length} locations available
                                      </p>
                                      <div className="max-h-32 overflow-y-auto space-y-1">
                                        {urls.map((url, index) => (
                                          <a
                                            key={index}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between text-sm text-[theme(color.brand.blue)] hover:text-blue-800 hover:underline group p-2 rounded hover:bg-blue-50 transition-all duration-200"
                                          >
                                            <span className="truncate">
                                              Software Testing Services in{" "}
                                              {getLocationName(url)}
                                            </span>
                                            <FaExternalLinkAlt className="w-3 h-3 flex-shrink-0 ml-2 group-hover:opacity-100 transition-opacity" />
                                          </a>
                                        ))}
                                      </div>
                                    </div>
                                  ) : (
                                    <a
                                      href={urls}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center justify-between text-[theme(color.brand.blue)] hover:text-blue-800 hover:underline group"
                                    >
                                      <span>
                                        Software Testing Service in {city}
                                      </span>
                                      <FaExternalLinkAlt className="w-4 h-4 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results */}
        {Object.keys(filteredData).length === 0 && searchTerm && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaSearch className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              No locations found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search term or browse all locations above.
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="bg-[theme(color.brand.blue)] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Show All Locations
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-br from-[theme(color.brand.blue)] to-blue-700 rounded-2xl p-8 text-white text-center">
          <FaGlobe className="w-12 h-12 text-white mx-auto mb-4 opacity-80" />
          <h3 className="text-2xl font-bold mb-4">
            Don&apos;t See Your Location?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            We&apos;re constantly expanding our services to new locations.
            Contact us to discuss bringing our world-class QA testing services
            to your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us">
              <button className="border-2 cursor-pointer border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[theme(color.brand.blue)] transition-all duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
            <FaFlag className="w-8 h-8 text-[theme(color.brand.blue)] mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {Object.keys(locationData).length}
            </div>
            <div className="text-sm text-gray-600">Countries</div>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
            <FaMapMarkerAlt className="w-8 h-8 text-[theme(color.brand.blue)] mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {Object.values(locationData).reduce(
                (total, states) => total + Object.keys(states).length,
                0
              )}
            </div>
            <div className="text-sm text-gray-600">States/Regions</div>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
            <FaCity className="w-8 h-8 text-[theme(color.brand.blue)] mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {Object.values(locationData).reduce(
                (total, states) =>
                  total +
                  Object.values(states).reduce(
                    (stateTotal, cities) =>
                      stateTotal + Object.keys(cities).length,
                    0
                  ),
                0
              )}
            </div>
            <div className="text-sm text-gray-600">Major Cities</div>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
            <FaGlobe className="w-8 h-8 text-[theme(color.brand.blue)] mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {totalLocations}+
            </div>
            <div className="text-sm text-gray-600">Total Locations</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsWeServe;
