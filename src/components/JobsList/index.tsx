import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getJobs } from "../../redux-setup/actions/actions";
import { JobCard } from "../JobCard";

export const JobsList = () => {
    const [searchParams] = useSearchParams()
    const query =searchParams.get('query')
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.jobs);
  const errorMessage = useSelector((state: any) => state.error);
  console.log(state);

  useEffect(() => {
    const resolve = async () => {
      dispatch(await getJobs({ query }));
    };
    resolve();
  }, [dispatch, query]);
  const renderListOfJobs = () => {
    return state?.entity?.allIds.map((id: string) => {
      const job = state?.entity?.byId[id];
      return <JobCard info={job} />;
    });
  };
  if(!state?.meta?.count&&errorMessage) return <span>
      {errorMessage}
  </span>;
  if(state?.meta?.count  === 0) return <span>
  No results 
</span>;
  return (
    <div>
      <h1 style={{ margin: "20px" }}>{query?`"${query}"`:'All Jobs'}({state?.meta?.count})</h1>
      <div className="list-container">{renderListOfJobs()}</div>
    </div>
  );
};
