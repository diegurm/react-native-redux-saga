import numeral from 'numeral';
import 'numeral/locales/pt-br';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

numeral.locale('pt-br');

export const formatPrice = (num) => `R$ ${numeral(num).format('0,0.00')}`;
export const formatNumber = (num) => `${numeral(num).format('0,0.00')}`;
export const formatDate = (date) =>
  format(parseISO(date), "dd'/'MM'/'yyyy", {
    locale: pt,
  });

export const parseCurrency = (num) =>
  typeof num === 'string' || num instanceof String
    ? num
      ? parseFloat(num.replace(/\./gi, '').replace(/,/gi, '.'))
      : 0
    : num;
