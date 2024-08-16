import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#f8f8f8', p: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are a leading trading platform providing the best trading solutions for our users. Join us to get the best trading experience.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" variant="body2" display="block" gutterBottom>
              Home
            </Link>
            <Link href="/login" variant="body2" display="block" gutterBottom>
              Login
            </Link>
            <Link href="/signup" variant="body2" display="block" gutterBottom>
              Sign Up
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link href="https://facebook.com" target="_blank" rel="noopener">
                <Facebook />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener">
                <Twitter />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener">
                <LinkedIn />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener">
                <Instagram />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            &copy; {new Date().getFullYear()} Trading Website. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
