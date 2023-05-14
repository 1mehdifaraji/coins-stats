import { FC, HTMLProps } from "react";

interface SkeletonProps {
  className?: HTMLProps<HTMLElement>["className"];
}

const Skeleton: FC<SkeletonProps> = ({ className }) => (
  <div
    data-testid="skeleton"
    className={`animate-pulse bg-gray-300 dark:bg-gray-600 rounded-md ${className}`}
  />
);

export default Skeleton;
