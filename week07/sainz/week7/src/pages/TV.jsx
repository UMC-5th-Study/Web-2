import { tvs } from '../tvDummy';
import TVItem from '../TVItem';

const TV = () => {
  const { results: tvDataList } = tvs;

  return (
    <div className="tv-page">
      {tvDataList.map((tvData) => (
        <TVItem key={tvData.id} {...tvData} />
      ))}
    </div>
  );
};
export default TV;
