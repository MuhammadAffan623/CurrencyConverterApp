import React, { createContext, useEffect, useState } from "react";

const ConversionContext = createContext<IConversionContextType | undefined>(
  undefined
);

const ConversionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currencies] = useState<Record<string, ICurrency>>({});
  const [history, setHistory] = useState<IConversion[]>(() => {
    const saved = localStorage.getItem("conversionHistory");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    // Fetch currencies and set them
  }, []);

  useEffect(() => {
    localStorage.setItem("conversionHistory", JSON.stringify(history));
  }, [history]);

  return (
    <ConversionContext.Provider value={{ currencies, history, setHistory }}>
      {children}
    </ConversionContext.Provider>
  );
};

export { ConversionContext, ConversionProvider };
