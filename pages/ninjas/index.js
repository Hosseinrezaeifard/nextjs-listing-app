import React from "react";
import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";

// runs at runtime of the website
// not in the browser in the build time
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: { ninjas: data },
  };
};

const index = ({ ninjas }) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <Link key={ninja.id} href={`/ninjas/${ninja.id}`}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default index;
