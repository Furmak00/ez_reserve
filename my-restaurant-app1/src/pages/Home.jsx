import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import RestaurantCard from '../components/RestaurantCard';
import Footer from '../components/Footer';
import { theme } from '../styles/theme';

const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.background};
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 1rem;
`;

const SectionTitle = styled(motion.h2)`
  font-family: ${theme.fonts.heading};
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: ${theme.colors.text};
`;

const RestaurantGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Simulate loading data
    setRestaurants([
      {
        id: 1,
        name: "Gourmet Bistro",
        cuisine: "French",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        id: 2,
        name: "Sushi Haven",
        cuisine: "Japanese",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        id: 3,
        name: "Pasta Paradise",
        cuisine: "Italian",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        id: 4,
        name: "Spice Route",
        cuisine: "Indian",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        id: 5,
        name: "Taco Fiesta",
        cuisine: "Mexican",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        id: 6,
        name: "Dim Sum Delight",
        cuisine: "Chinese",
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ]);
  }, []);

  return (
    <HomeContainer>
      <Header />
      <HeroSection />
      <Section id="featured-restaurants">
        <SectionTitle
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Restaurants
        </SectionTitle>
        <RestaurantGrid>
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </RestaurantGrid>
      </Section>
      <Footer />
    </HomeContainer>
  );
}

export default Home;