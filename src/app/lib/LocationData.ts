export interface LocationData {
  [country: string]: {
    [state: string]: {
      [city: string]: string[] | string;
    };
  };
}

// Organized location data
  export const locationData: LocationData = {
    India: {
      Assam: {
        Guwahati:
          "https://www.testriq.com/software-qa-testing-services-in-guwahati",
      },
      Bihar: {
        Patna: "https://www.testriq.com/software-qa-testing-services-in-patna",
      },
      "Chandigarh (Union Territory)": {
        Chandigarh:
          "https://www.testriq.com/software-qa-testing-services-in-chandigarh",
      },
      Chhattisgarh: {
        Raipur:
          "https://www.testriq.com/software-qa-testing-services-in-raipur",
      },
      "Delhi (Union Territory)": {
        Delhi: "https://www.testriq.com/software-qa-testing-services-in-delhi",
      },
      Goa: {
        Goa: "https://www.testriq.com/software-qa-testing-services-in-goa",
      },
      Gujarat: {
        Ahmedabad:
          "https://www.testriq.com/software-qa-testing-services-in-ahmedabad",
        Gandhinagar:
          "https://www.testriq.com/software-qa-testing-services-in-gandhinagar",
        Rajkot:
          "https://www.testriq.com/software-qa-testing-services-in-rajkot",
        Surat: "https://www.testriq.com/software-qa-testing-services-in-surat",
        Vadodara:
          "https://www.testriq.com/software-qa-testing-services-in-vadodara",
      },
      Haryana: {
        Faridabad:
          "https://www.testriq.com/software-qa-testing-services-in-faridabad",
        Gurgaon:
          "https://www.testriq.com/software-qa-testing-services-in-gurgaon",
      },
      "Himachal Pradesh": {
        Shimla:
          "https://www.testriq.com/software-qa-testing-services-in-shimla",
      },
      "Jammu & Kashmir": {
        Jammu: "https://www.testriq.com/software-qa-testing-services-in-jammu",
      },
      Jharkhand: {
        Jamshedpur:
          "https://www.testriq.com/software-qa-testing-services-in-jamshedpur",
        Ranchi:
          "https://www.testriq.com/software-qa-testing-services-in-ranchi",
      },
      Karnataka: {
        Bengaluru:
          "https://www.testriq.com/software-qa-testing-services-in-bengaluru",
        Mangalore:
          "https://www.testriq.com/software-qa-testing-services-in-mangalore",
      },
      Kerala: {
        Ernakulam:
          "https://www.testriq.com/software-qa-testing-services-in-ernakulam",
        Kochi: "https://www.testriq.com/software-qa-testing-services-in-kochi",
        Trivandrum:
          "https://www.testriq.com/software-qa-testing-services-in-trivandrum",
      },
      "Madhya Pradesh": {
        Bhopal:
          "https://www.testriq.com/software-qa-testing-services-in-bhopal",
        Gwalior:
          "https://www.testriq.com/software-qa-testing-services-in-gwalior",
        Indore:
          "https://www.testriq.com/software-qa-testing-services-in-indore",
      },
      Maharashtra: {
        Mumbai: [
          "https://www.testriq.com/software-qa-testing-services-in-mumbai",
          "https://www.testriq.com/software-qa-testing-services-in-andheri",
          "https://www.testriq.com/software-qa-testing-services-in-bandra",
          "https://www.testriq.com/software-qa-testing-services-in-bhandup",
          "https://www.testriq.com/software-qa-testing-services-in-borivali",
          "https://www.testriq.com/software-qa-testing-services-in-byculla",
          "https://www.testriq.com/software-qa-testing-services-in-charni-road",
          "https://www.testriq.com/software-qa-testing-services-in-chinchpokli",
          "https://www.testriq.com/software-qa-testing-services-in-churchgate",
          "https://www.testriq.com/software-qa-testing-services-in-cotton-green",
          "https://www.testriq.com/software-qa-testing-services-in-cst",
          "https://www.testriq.com/software-qa-testing-services-in-currey-road",
          "https://www.testriq.com/software-qa-testing-services-in-dadar",
          "https://www.testriq.com/software-qa-testing-services-in-dahisar",
          "https://www.testriq.com/software-qa-testing-services-in-dockyard-road",
          "https://www.testriq.com/software-qa-testing-services-in-ghatkopar",
          "https://www.testriq.com/software-qa-testing-services-in-goregaon",
          "https://www.testriq.com/software-qa-testing-services-in-grant-road",
          "https://www.testriq.com/software-qa-testing-services-in-jogeshwari",
          "https://www.testriq.com/software-qa-testing-services-in-kandivali",
          "https://www.testriq.com/software-qa-testing-services-in-kanjurmarg",
          "https://www.testriq.com/software-qa-testing-services-in-khar-road",
          "https://www.testriq.com/software-qa-testing-services-in-kings-circle",
          "https://www.testriq.com/software-qa-testing-services-in-kurla",
          "https://www.testriq.com/software-qa-testing-services-in-lower-parel",
          "https://www.testriq.com/software-qa-testing-services-in-mahalaxmi",
          "https://www.testriq.com/software-qa-testing-services-in-mahim",
          "https://www.testriq.com/software-qa-testing-services-in-malad",
          "https://www.testriq.com/software-qa-testing-services-in-marine-lines",
          "https://www.testriq.com/software-qa-testing-services-in-masjid-bandar",
          "https://www.testriq.com/software-qa-testing-services-in-matunga-road",
          "https://www.testriq.com/software-qa-testing-services-in-mumbai-central",
          "https://www.testriq.com/software-qa-testing-services-in-mulund",
          "https://www.testriq.com/software-qa-testing-services-in-nahur",
          "https://www.testriq.com/software-qa-testing-services-in-prabhadevi",
          "https://www.testriq.com/software-qa-testing-services-in-ram-mandir",
          "https://www.testriq.com/software-qa-testing-services-in-reay-road",
          "https://www.testriq.com/software-qa-testing-services-in-sandhurst-road",
          "https://www.testriq.com/software-qa-testing-services-in-santacruz",
          "https://www.testriq.com/software-qa-testing-services-in-sewri",
          "https://www.testriq.com/software-qa-testing-services-in-sion",
          "https://www.testriq.com/software-qa-testing-services-in-vidyavihar",
          "https://www.testriq.com/software-qa-testing-services-in-vikhroli",
          "https://www.testriq.com/software-qa-testing-services-in-vile-parle",
          "https://www.testriq.com/software-qa-testing-services-in-wadala-road",
        ],
        "Extended Mumbai": [
          "https://www.testriq.com/software-qa-testing-services-in-bhayandar",
          "https://www.testriq.com/software-qa-testing-services-in-diva",
          "https://www.testriq.com/software-qa-testing-services-in-dombivli",
          "https://www.testriq.com/software-qa-testing-services-in-kalwa",
          "https://www.testriq.com/software-qa-testing-services-in-kalyan",
          "https://www.testriq.com/software-qa-testing-services-in-kopar",
          "https://www.testriq.com/software-qa-testing-services-in-mira-road",
          "https://www.testriq.com/software-qa-testing-services-in-mumbra",
          "https://www.testriq.com/software-qa-testing-services-in-naigaon",
          "https://www.testriq.com/software-qa-testing-services-in-nalasopara",
          "https://www.testriq.com/software-qa-testing-services-in-navi-mumbai",
          "https://www.testriq.com/software-qa-testing-services-in-thakurli",
          "https://www.testriq.com/software-qa-testing-services-in-thane",
          "https://www.testriq.com/software-qa-testing-services-in-vasai",
          "https://www.testriq.com/software-qa-testing-services-in-virar",
        ],
        Nagpur:
          "https://www.testriq.com/software-qa-testing-services-in-nagpur",
        Nashik:
          "https://www.testriq.com/software-qa-testing-services-in-nashik",
        Pune: "https://www.testriq.com/software-qa-testing-services-in-pune",
      },
      Odisha: {
        Bhubaneswar:
          "https://www.testriq.com/software-qa-testing-services-in-bhubaneswar",
      },
      Punjab: {
        Amritsar:
          "https://www.testriq.com/software-qa-testing-services-in-amritsar",
        Jalandhar:
          "https://www.testriq.com/software-qa-testing-services-in-jalandhar",
        Ludhiana:
          "https://www.testriq.com/software-qa-testing-services-in-ludhiana",
      },
      Rajasthan: {
        Ajmer: "https://www.testriq.com/software-qa-testing-services-in-ajmer",
        Jaipur:
          "https://www.testriq.com/software-qa-testing-services-in-jaipur",
        Jodhpur:
          "https://www.testriq.com/software-qa-testing-services-in-jodhpur",
        Udaipur:
          "https://www.testriq.com/software-qa-testing-services-in-udaipur",
      },
      "Tamil Nadu": {
        Chennai:
          "https://www.testriq.com/software-qa-testing-services-in-chennai",
        Coimbatore:
          "https://www.testriq.com/software-qa-testing-services-in-coimbatore",
        Madurai:
          "https://www.testriq.com/software-qa-testing-services-in-madurai",
      },
      Telangana: {
        Hyderabad:
          "https://www.testriq.com/software-qa-testing-services-in-hyderabad",
        Secunderabad:
          "https://www.testriq.com/software-qa-testing-services-in-secunderabad",
      },
      "Uttar Pradesh": {
        Agra: "https://www.testriq.com/software-qa-testing-services-in-agra",
        Ghaziabad:
          "https://www.testriq.com/software-qa-testing-services-in-ghaziabad",
        Gorakhpur:
          "https://www.testriq.com/software-qa-testing-services-in-gorakhpur",
        "Greater Noida":
          "https://www.testriq.com/software-qa-testing-services-in-greater-noida",
        Kanpur:
          "https://www.testriq.com/software-qa-testing-services-in-kanpur",
        Lucknow:
          "https://www.testriq.com/software-qa-testing-services-in-lucknow",
        Meerut:
          "https://www.testriq.com/software-qa-testing-services-in-meerut",
        Moradabad:
          "https://www.testriq.com/software-qa-testing-services-in-moradabad",
        Noida: "https://www.testriq.com/software-qa-testing-services-in-noida",
      },
      Uttarakhand: {
        Dehradun:
          "https://www.testriq.com/software-qa-testing-services-in-dehradun",
      },
      "West Bengal": {
        Kolkata:
          "https://www.testriq.com/software-qa-testing-services-in-kolkata",
      },
    },
    "United Arab Emirates": {
      UAE: {
        Ajman: "https://www.testriq.com/software-qa-testing-services-in-ajman",
        "Al Ain":
          "https://www.testriq.com/software-qa-testing-services-in-al-ain",
        "Al Dhannah":
          "https://www.testriq.com/software-qa-testing-services-in-al-dhannah",
        "Ar Rams":
          "https://www.testriq.com/software-qa-testing-services-in-ar-rams",
        "Dibba Al Fujairah":
          "https://www.testriq.com/software-qa-testing-services-in-dibba-al-fujairah",
        "Dibba Al Hisn":
          "https://www.testriq.com/software-qa-testing-services-in-dibba-al-hisn",
        Dhaid: "https://www.testriq.com/software-qa-testing-services-in-dhaid",
        Fujairah:
          "https://www.testriq.com/software-qa-testing-services-in-fujairah",
        Ghayathi:
          "https://www.testriq.com/software-qa-testing-services-in-ghayathi",
        Hatta: "https://www.testriq.com/software-qa-testing-services-in-hatta",
        "Jebel Ali":
          "https://www.testriq.com/software-qa-testing-services-in-jebel-ali",
        Kalba: "https://www.testriq.com/software-qa-testing-services-in-kalba",
        "Liwa Oasis":
          "https://www.testriq.com/software-qa-testing-services-in-liwa-oasis",
        "Madinat Zayed":
          "https://www.testriq.com/software-qa-testing-services-in-madinat-zayed",
        "Ras Al Khaimah":
          "https://www.testriq.com/software-qa-testing-services-in-ras-al-khaimah",
        Sharjah:
          "https://www.testriq.com/software-qa-testing-services-in-sharjah",
        "Umm Al Quwain":
          "https://www.testriq.com/software-qa-testing-services-in-umm-al-quwain",
      },
    },
  };