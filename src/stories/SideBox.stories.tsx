import React from 'react';
import SideBox from '../components/SideBox/SideBox';

export default {
  title: 'SideBox'
};

const value = ` >> Неизвестное слово: бул_выр
/* В онтологии или запросе можно задать грамматику в форме Бэкуса. Например: */
Бул_выр ::=“Конъюнкт | Бул_выр ‘V’ Конъюнкт”.
>> Неизвестное слово: nonterminal
Область nonterminal  стала  подобластью области область .
>> Неизвестное слово: бул_выр
>> Неизвестное слово: конъюнкт
Область конъюнкт  стала  подобластью области бул_выр .

Команда выполнена успешно.

Конъюнкт ::=“Атом | Конъюнкт ‘&’ Атом”.
>> Неизвестное слово: атом
Область атом  стала  подобластью области конъюнкт .
Результат:  истина .
Команда выполнена успешно.`;

export const Basic = () => <SideBox name="Логи" value={value} />;
