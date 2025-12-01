export const baseAvatar = `
  inline-flex items-center justify-center
  shrink-0
`;

export const variantMap = {
  default: {
    baseClasses: `
      overflow-hidden rounded-full
      bg-(--color-image-placeholder-background)
      w-(--size-avatar-container-default-mobile-diameter)
      sm:w-(--size-avatar-container-default-tablet-diameter)
      lg:w-(--size-avatar-container-default-desktop-diameter)
      h-(--size-avatar-container-default-mobile-diameter)
      sm:h-(--size-avatar-container-default-tablet-diameter)
      lg:h-(--size-avatar-container-default-desktop-diameter)
    `,

    imageClasses: `
      w-full h-full object-cover object-center
    `,

    placeholderClasses: `
      text-white
      text-(length:--text-avatar-placeholder-mobile-font-size)
      sm:text-(length:--text-avatar-placeholder-tablet-font-size)
      lg:text-(length:--text-avatar-placeholder-desktop-font-size)
      font-(--text-avatar-placeholder-font-weight)
   `,
    },
};