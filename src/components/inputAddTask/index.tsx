import {Feather} from '@expo/vector-icons';
import { Input, InputButton, InputContainer } from './styles';

export function InputAddTask() {
   return (
      <InputContainer>

      <Input placeholder="Adicionar uma tarefa" placeholderTextColor="#fff" keyboardType='default' />
         <InputButton>
            <Feather name="plus-square" size={24} color="#fff" />
         </InputButton>
      
      
      </InputContainer>
   )

}