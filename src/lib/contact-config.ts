export const PHONE_NUMBERS = [
  {
    number: "+57 301 150 5174",
    numberClean: "+573011505174",
    display: "+57 301 150 5174"
  },
  {
    number: "+57 300 989 5852",
    numberClean: "+573009895852",
    display: "+57 300 989 5852"
  },
  {
    number: "+57 305 397 9628",
    numberClean: "+573053979628",
    display: "+57 305 397 9628"
  }
];

export const getRandomPhoneIndex = (): number => {
  return Math.floor(Math.random() * PHONE_NUMBERS.length);
};

export const getPhoneByIndex = (index?: number) => {
  const finalIndex = index !== undefined ? index : getRandomPhoneIndex();
  return PHONE_NUMBERS[finalIndex % PHONE_NUMBERS.length];
};

export const getPhoneNumber = (index?: number) => {
  return getPhoneByIndex(index).numberClean;
};

export const getPhoneDisplay = (index?: number) => {
  return getPhoneByIndex(index).display;
};

export const WHATSAPP_PREFIX = "https://wa.me";

export const getWhatsAppLink = (index?: number) => {
  const phone = getPhoneByIndex(index);
  return `${WHATSAPP_PREFIX}/${phone.numberClean.replace(/\D/g, '')}`;
};

export const getPhoneLink = (index?: number) => {
  return `tel:${getPhoneByIndex(index).numberClean}`;
};

export const LOCATION = {
  mapsLink: "https://maps.app.goo.gl/GJFsDZyaeVA79HVCA",
  address: "Biencrecer Cra 81 #27-17 Consultorio 1, Belén La Palma, Medellín, Antioquia"
};
