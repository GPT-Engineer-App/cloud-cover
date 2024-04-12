import { Box, Button, Container, Flex, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Container maxW="container.lg" py={8}>
        <Flex direction={["column", "row"]} align="center" justify="space-between">
          <Box flex={1} pr={[0, 8]}>
            <Heading as="h1" size="2xl" mb={4}>
              Supercharge Your Business with Our SaaS Solution
            </Heading>
            <Text fontSize="xl" mb={8}>
              Streamline your operations, boost productivity, and grow your business with our powerful software.
            </Text>
            <Stack direction={["column", "row"]} spacing={4}>
              <Button colorScheme="blue" size="lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Stack>
          </Box>
          <Box flex={1}>
            <Image src="https://images.unsplash.com/photo-1634496994539-ebffdbfe6e19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzYWFzJTIwZGFzaGJvYXJkJTIwc2NyZWVuc2hvdHxlbnwwfHx8fDE3MTI5NjU5OTR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="SaaS Dashboard" />
          </Box>
        </Flex>
      </Container>

      <Box bg="gray.100" py={16}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={8} textAlign="center">
            Why Choose Us?
          </Heading>
          <Flex direction={["column", "row"]} justify="space-between">
            <Box p={4} bg="white" borderRadius="md" boxShadow="md" mb={[4, 0]} flex={1} mr={[0, 4]}>
              <FaCheck size={24} color="green.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Easy to Use
              </Heading>
              <Text>Our intuitive interface makes it easy to get started and maximize your productivity.</Text>
            </Box>
            <Box p={4} bg="white" borderRadius="md" boxShadow="md" mb={[4, 0]} flex={1} mr={[0, 4]}>
              <FaCheck size={24} color="green.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Powerful Features
              </Heading>
              <Text>Access a wide range of tools and features to streamline your workflows and drive results.</Text>
            </Box>
            <Box p={4} bg="white" borderRadius="md" boxShadow="md" flex={1}>
              <FaCheck size={24} color="green.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Expert Support
              </Heading>
              <Text>Our dedicated support team is always ready to help you with any questions or issues.</Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Container maxW="container.lg" py={8} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>
          Ready to Get Started?
        </Heading>
        <Text fontSize="xl" mb={8}>
          Sign up now and take your business to the next level with our SaaS solution.
        </Text>
        <Button colorScheme="blue" size="lg">
          Sign Up Now
        </Button>
      </Container>

      <Box bg="gray.800" color="white" py={8}>
        <Container maxW="container.lg" textAlign="center">
          <Text mb={4}>&copy; {new Date().getFullYear()} SaaS Business. All rights reserved.</Text>
          <Stack direction="row" spacing={4} justify="center">
            <Link href="#">Terms of Service</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Contact Us</Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
