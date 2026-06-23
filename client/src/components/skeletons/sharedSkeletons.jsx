export const SectionHeadingWithSubtitleSkeleton = () => {
  return (
    <div className="flex flex-col items-center w-full gap-3">
      {/* Main Heading */}
      <div className="skeleton h-10 w-64 rounded" />

      {/* Subtitle */}
      <div className="flex flex-col items-center w-full gap-2">
        <div className="skeleton h-4 w-full max-w-2xl rounded" />
        <div className="skeleton h-4 w-5/6 max-w-xl rounded" />
      </div>
    </div>
  );
};

export const SectionHeadingSkeleton = () => {
  return (
    <div className="flex flex-col items-center w-full gap-3">
      {/* Main Heading */}
      <div className="skeleton h-10 w-64 rounded" />
    </div>
  );
};

export const SectionCTASkeleton = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="skeleton h-10 w-36 rounded-full" />
    </div>
  );
};
