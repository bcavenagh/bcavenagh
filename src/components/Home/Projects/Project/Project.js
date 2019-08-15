import React from "react";
import classes from "./Project.module.scss";
import classNames from "classnames";

const project = props => {
  console.log(props);
  return (
    <>
      <div
        className={classes.Project}
        style={{
          backgroundImage: "url(" + props.project.image + ")",
          backgroundSize: "cover"
        }}
      >
        <div className={classes.ProjectInfo}>
          <h2 className={classes.Name}>{props.project.name}</h2>
          <p className={classes.desc}>Tech used: {props.project.desc}</p>
          <a
            target="_blank"
            referrer="noopener"
            href={props.project.link}
            className={classes.ViewProjectButton}
          >
            View Project
          </a>
        </div>
      </div>
      <div className={classNames(classes.mobile)}>
        <img src={props.project.image} alt="Project Snapshot" />
        <div className={classes.ProjectInfo}>
          <h2 className={classes.Name}>{props.project.name}</h2>
          <p className={classes.desc}>Tech used: {props.project.desc}</p>
          <a
            target="_blank"
            referrer="noopener"
            href={props.project.link}
            className={classes.ViewProjectButton}
          >
            View Project
          </a>
        </div>
      </div>
    </>
  );
};

export default project;
