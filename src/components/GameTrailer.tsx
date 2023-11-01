import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const trailerData = data?.results[0];
  return trailerData ? (
    <video src={trailerData.data[480]} poster={trailerData.preview} controls />
  ) : null;
};

export default GameTrailer;
