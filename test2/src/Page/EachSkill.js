import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { SkillContext } from "../Context/Context";
// const contents = [
//   { id: 1, title: "HTML", description: "HTML is ..." },
//   { id: 2, title: "JS", description: "JS is ..." },
//   { id: 3, title: "React", description: "React is ..." },
// ];
const EachSkill = () => {
  const contents = useContext(SkillContext);
  var params = useParams();
  var content_id = params.content_id;
  var selected_topic = {
    title: "죄송합니다",
    description: "해당 공부내용을 찾지 못했습니다",
  };
  for (var i = 0; i < contents.length; i++) {
    if (contents[i].id === Number(content_id)) {
      selected_topic = contents[i];
      break;
    }
  }
  return (
    <div>
      <h2>공부한 내용입니다.</h2>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  );
};

export default EachSkill;
