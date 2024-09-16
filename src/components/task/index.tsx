import {Feather} from '@expo/vector-icons';
import { Container, TaskDelete, TaskDone, TaskText } from './styles';



export function Task() {

    return (

    <Container>
      <TaskDone>
         <Feather name="square" size={24} color="#fff" />
      </TaskDone>
      <TaskText> Tarefa</TaskText>
      <TaskDelete> 
         <Feather name="trash" size={24} color="#fff" />
      </TaskDelete>
    </Container>
    );
    }