export {};

declare global {
  interface IConversion {
    id: string;
    from: string;
    to: string;
    amount: number;
    result: number;
    rate: number;
    timestamp: string;
  }

  interface ICurrency {
    symbol: string;
    name: string;
    symbol_native: string;
    decimal_digits: number;
    rounding: number;
    code: string;
    name_plural: string;
  }

  interface IConversionContextType {
    currencies: Record<string, Currency>;
    history: Conversion[];
    setHistory: React.Dispatch<React.SetStateAction<Conversion[]>>;
  }

  interface IConversionHistoryProps {
    history: Conversion[];
    currencies: Record<string, Currency>;
  }
}
