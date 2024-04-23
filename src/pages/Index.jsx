import { Box, Heading, List, ListItem, Text, VStack, Image, Link } from "@chakra-ui/react";
import { FaBuilding, FaRoad, FaUserInjured } from "react-icons/fa";

const Index = () => {
  // Mock data - in a real scenario, this would come from an API or other data source
  const earthquakeData = {
    humanCasualties: 10,
    damagedBuildings: 50,
    infrastructureDamage: "Several roads and bridges collapsed",
    localizedEffects: "Landslides in northern regions",
    imageUrl: "https://images.unsplash.com/photo-1691319682835-610644ac676c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxOb3RvJTIwUGVuaW5zdWxhJTIwZWFydGhxdWFrZSUyMGRhbWFnZXxlbnwwfHx8fDE3MTM4NTE3MzB8MA&ixlib=rb-4.0.3&q=80&w=1080",
  };

  return (
    <VStack spacing={4} p={5}>
      <Heading as="h1" size="xl">
        能登半島地震報告
      </Heading>
      <Image src={earthquakeData.imageUrl} alt="地震の被害" boxSize="300px" objectFit="cover" />
      <List spacing={3}>
        <ListItem>
          <Text>
            <FaUserInjured /> 人的被害: {earthquakeData.humanCasualties}
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            <FaBuilding /> 建物の損傷: {earthquakeData.damagedBuildings}
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            <FaRoad /> インフラの損傷: {earthquakeData.infrastructureDamage}
          </Text>
        </ListItem>
        <ListItem>
          <Text>地域的影響: {earthquakeData.localizedEffects}</Text>
        </ListItem>
        <ListItem>
          <Link href="https://example.com/earthquake-verification" isExternal>
            詳細情報はこちら
          </Link>
        </ListItem>
      </List>
    </VStack>
  );
};

export default Index;
