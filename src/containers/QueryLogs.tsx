import { connect } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import SideBox from '../components/SideBox/SideBox';

const value = ` ~(x_1 V x_2)- Бул_выр?
Построен новый дескриптор:
x_1 
Введены определяющие соотношения для 
x_1 
Построен новый дескриптор:
x_2 
Введены определяющие соотношения для 
x_2 
Построен новый дескриптор:
x_1  v x_2  
Введены определяющие соотношения для 
x_1  v x_2  
Построен новый дескриптор:
( x_1  v x_2   ) 
Введены определяющие соотношения для 
( x_1  v x_2   ) 
Построен новый дескриптор:
~ ( x_1  v x_2   )  
Введены определяющие соотношения для 
~ ( x_1  v x_2   )  
Результат:  да .
Команда выполнена успешно.

ответ : " да  " 
Построен новый дескриптор:
ответ : " да  " 
Введены определяющие соотношения для 
ответ : " да  " 
Результат:  ответ : " да  " .
Команда выполнена успешно.
>> Неизвестное слово: структуа
Входное выражение неправильно!Входное выражение неправильно!
Нет шаблона для начала команды 
 или неверен символ конца предложения.Нет шаблона для начала команды 
 или неверен символ конца предложения.
Неверная команда.Неверная команда.
 `;

const mapState = (state: RootState) => {
  return {
    name: 'Логи запроса',
    value
  };
};

export default connect(mapState)(SideBox);
