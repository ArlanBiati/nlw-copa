import { useNavigation } from '@react-navigation/native';
import { Row, Text, Pressable } from 'native-base';

export function EmptyPoolList() {
  const navigation = useNavigation();

  function handleFindPool() {
    navigation.navigate('find');
  }

  function handleNewPool() {
    navigation.navigate('new');
  }

  return (
    <Row flexWrap="wrap" justifyContent="center">
      <Text color="white" fontSize="sm" textAlign="center">
        Você ainda não está participando de {'\n'} nenhum bolão, que tal
      </Text>

      <Pressable onPress={handleFindPool}>
        <Text
          textDecorationLine="underline"
          color="yellow.500"
          textDecoration="underline"
        >
          buscar um por código
        </Text>
      </Pressable>

      <Text color="white" fontSize="sm" textAlign="center" mx={1}>
        ou
      </Text>

      <Pressable onPress={handleNewPool}>
        <Text textDecorationLine="underline" color="yellow.500">
          criar um novo
        </Text>
      </Pressable>

      <Text color="white" fontSize="sm" textAlign="center">
        ?
      </Text>
    </Row>
  );
}
