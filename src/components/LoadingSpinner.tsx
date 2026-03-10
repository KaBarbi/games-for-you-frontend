interface LoadingSpinnerProps {
  size?: number;
}

const LoadingSpinner = ({ size = 32 }: LoadingSpinnerProps) => {
  return (
    <div className="flex items-center justify-center py-10">
      <div
        className="animate-spin rounded-full border-4 border-gray-700 border-t-blue-500"
        style={{ width: size, height: size }}
      />
    </div>
  );
};

export default LoadingSpinner;
