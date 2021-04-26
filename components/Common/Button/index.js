import tw, { styled, css } from 'twin.macro';

const Button = styled.button(({ isSecondary }) => [
  tw`px-10 py-3 rounded-2xl border`,
  isSecondary && tw`border-brown-gold bg-brown-gold text-white`,
]);

export default Button;
