import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import * as axios from "axios";

import Comic from '../components/comic.jsx'

jest.mock("axios");
const sampleImages = ["1.png", "2.png", "3.png"];
let i = 0;
const sampleImage = () => {
  return sampleImages[i++]
};

describe('renders comic by hitting API', () => {
  axios.get.mockResolvedValue({ data: { "img": sampleImage() } });

  let imageSource;
  it('should populate the image source via axios mock', async () => {
    render(<Comic />);
    await waitFor(() => {
      imageSource = screen.getByRole('img').src;
      expect(imageSource).toMatch(/png/);
    });
  })

  let imageSource2;
  it('should update the image on click', async () => {
    axios.get.mockResolvedValue({ data: { "img": sampleImage() } });
    render(<Comic />);
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      imageSource2 = screen.getByRole('img').src;
      expect(imageSource).not.toMatch(imageSource2);
    });


  })
})