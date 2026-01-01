import { useContext } from 'react';
import { useI18n } from "../hooks/useI18n";

export const useI18n = () => {
  return useContext(I18nContext);
};
