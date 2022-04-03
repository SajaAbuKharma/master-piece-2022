import React, { useEffect, useMemo, useState } from "react";
import SubjectCard from "./SubjectCard";
import "./Subjects.css";

function Subjects(props) {
  const [search, setSearch] = useState(null);
  const [data, setData] = useState(props.subjects);
  const [sortValue, setSortValue] = useState("");

  const [ids, setIds] = useState([]);

  useMemo(() => {
    if (props.disabledItem) {
      let temp = props.disabledItem.map((ele) => {
        return ele.id;
      });
      setIds(temp);
    }
  }, [props.disabledItem]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSort = (e) => {
    if (e.target.value === "low") {
      setSortValue("low");
      setData(
        data.sort(function (a, b) {
          return a.price - b.price;
        })
      );
    } else if (e.target.value === "high") {
      setSortValue("high");
      setData(
        data.sort(function (a, b) {
          return b.price - a.price;
        })
      );
    } else if (e.target.value === "All") {
      setSortValue("All");
      setData(
        data.sort(function (a, b) {
          return a.id - b.id;
        })
      );
    }
  };

  const mapping = () => {
    let isEmpty = true;
    let arr = data.map((subject) => {
      if (subject.title.toLowerCase().includes(search.toLowerCase())) {
        if (isEmpty === true) {
          isEmpty = false;
        }
        for (let i = 0; i < ids.length; i++) {
          if (+ids[i] == subject.id) {
            return (
              <SubjectCard
                blocked={"yes"}
                subjectsData={subject}
                key={subject.id}
              />
            );
          }
        }
        return (
          <SubjectCard blocked={"no"} subjectsData={subject} key={subject.id} />
        );
      } else {
        return "";
      }
    });

    return isEmpty ? (
      <div style={{ fontSize: "34px", textAlign: "center" }}>No Data Found</div>
    ) : (
      arr.map((subject) => {
        return subject;
      })
    );
  };

  return (
    <div className="subject-list-container">
      <div className="background">
        <div className="overlay">
          <h1 style={{ color: "white" }}> Book Your Subject </h1>
        </div>
      </div>
      <div className="subjects pb-5">
        <div className="search-sort p-5 container">
          <input
            type="text"
            placeholder="Search ..."
            className="mr-5"
            onChange={handleSearch}
          />
          <div className="sorting-input">
            <label className="pr-2">Sort by:</label>
            <select onChange={handleSort}>
              <option value="All">Default</option>
              <option value="low">Price low to high </option>
              <option value="high">Price high to low </option>
            </select>
          </div>
        </div>
        <div>
          {search == null
            ? data.map((subject) => {
                for (let i = 0; i < ids.length; i++) {
                  if (+ids[i] == subject.id) {
                    return (
                      <SubjectCard
                        blocked={"yes"}
                        subjectsData={subject}
                        key={subject.id}
                      />
                    );
                  }
                }
                return (
                  <SubjectCard
                    blocked={"no"}
                    subjectsData={subject}
                    key={subject.id}
                  />
                );
              })
            : mapping()}
        </div>
        <div>{data.length === 0 ? "No Data Found" : ""}</div>
      </div>
    </div>
  );
}

export default Subjects;
