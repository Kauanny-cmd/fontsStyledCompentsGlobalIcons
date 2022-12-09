import {FlatList} from 'react-native';

import { useTheme } from 'styled-components'; 

import {ResumeCard} from '../../components/ResumeCard';
import {TransactionCard} from '../../components/TransactionCard';

import { 
  Container,
  Header,
  UserContainer,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  IconPower,
  ResumeCards,
  TransactionsContainer,
  Title
} from './styles';

import {DataProps,data} from '../../data/transactions'

export function Dashboard(){
  

  return (
    <Container>
      <Header>
        <UserContainer>
          <UserInfo>
            <Photo source={{uri:"https://github.com/fabioabrantes.png"}} />
            <User>
              <UserGreeting>Olá</UserGreeting>
              <UserName>Fabio</UserName>
            </User>
          </UserInfo>
          
          <IconPower name="power" size={24}/>
        </UserContainer>
      </Header>

      <ResumeCards
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal:16}}
      >
        <ResumeCard 
          type="up"
          title="Entradas" 
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
          nameIcon='arrow-up-circle'
        />
        <ResumeCard 
          type="down"
          title="Saidas" 
          amount="R$ 12.259,00"
          lastTransaction="Última saída dia 03 de abril"
          nameIcon='arrow-down-circle'
        />
        <ResumeCard 
          type="total"
          title="Total" 
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
          nameIcon ="dollar-sign"
        />
      </ResumeCards>

      <TransactionsContainer>
        <Title>Listagem</Title>
      
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({item})=>(
            <TransactionCard data={item}/>
          )}
          keyExtractor={(item)=>item.id}
        />
      </TransactionsContainer>
      
    </Container>
  );
}