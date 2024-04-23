import { Box, Heading, List, ListItem, Text, VStack, Image } from "@chakra-ui/react";
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
        Noto Peninsula Earthquake Report
      </Heading>
      <Image src={earthquakeData.imageUrl} alt="Earthquake Damage" boxSize="300px" objectFit="cover" />
      <List spacing={3}>
        <ListItem>
          <Text>
            <FaUserInjured /> Human Casualties: {earthquakeData.humanCasualties}
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            <FaBuilding /> Damaged Buildings: {earthquakeData.damagedBuildings}
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            <FaRoad /> Infrastructure Damage: {earthquakeData.infrastructureDamage}
          </Text>
        </ListItem>
        <ListItem>
          <Text>Localized Effects: {earthquakeData.localizedEffects}</Text>
        </ListItem>
      </List>
    </VStack>
  );
};

export default Index;
