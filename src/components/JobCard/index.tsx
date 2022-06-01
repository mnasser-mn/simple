import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSkill } from "../../redux-setup/actions/actions";
import { Tag } from "../tag";
import "./style.scss";
export const JobCard = ({ info }: any) => {
  const dispatch = useDispatch();
  const skills = useSelector((state: any) => {
    console.log({ state });
    return state.skills.entity.byId;
  });
  useEffect(() => {
    info.relationships.skills.forEach(async (element: any) => {
      dispatch(await getSkill(element.id));
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderTags = () => {
    return info.relationships.skills.map((item: any) => {
      console.log(skills);
      const skill = skills[item.id];
      if (skill) return <Tag title={skill.attributes.name} />;
      return null;
    });
  };

  return (
    <div className="card-container">
      <h3 className="job-title">{info.attributes.title}</h3>
      <div>
        <p>Related skills:</p>
        {renderTags()}
      </div>
      <br/>
      <Link className="link" to={`/jobs/${info.id}`}>View Job Details</Link>
    </div>
  );
};
