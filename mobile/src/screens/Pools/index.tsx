import { FlatList, Icon, useToast, VStack } from 'native-base';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { api } from '../../services/api';

import { Octicons } from '@expo/vector-icons';

import { Button } from '../../components/Button/Index';
import { Header } from '../../components/Header';
import { PoolCard, PoolCardPros } from '../../components/PoolCard';
import { Loading } from '../../components/Loading';
import { EmptyPoolList } from '../../components/EmptyPoolList';

export function Pools() {
  const navigation = useNavigation();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [pools, setPools] = useState<PoolCardPros[]>([]);

  function handleNavigationToFindPools() {
    navigation.navigate('find');
  }

  async function fatchPools() {
    try {
      setIsLoading(true);
      const response = await api.get('/pools');
      setPools(response.data.pools);
    } catch (err) {
      console.log(err);

      toast.show({
        title: 'Não foi possivel carregar os bolões!',
        placement: 'top',
        bg: 'red.500',
      });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fatchPools();
  }, []);

  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Meus bolões" />
      <VStack
        mt={6}
        mx={5}
        borderBottomWidth={1}
        borderBottomColor="gray.600"
        pb={4}
        mb={4}
      >
        <Button
          title="Buscar bolão por código"
          leftIcon={
            <Icon as={Octicons} name="search" color="black" size="md" />
          }
          onPress={handleNavigationToFindPools}
        />
      </VStack>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={pools}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PoolCard data={item} />}
          px={5}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ pb: 10 }}
          ListEmptyComponent={() => <EmptyPoolList />}
        />
      )}
    </VStack>
  );
}
