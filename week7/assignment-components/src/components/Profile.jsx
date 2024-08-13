import React from "react";

const Profile = ({ user }) => {
  return (
    <div style={styles.profileComponent}>
      <div style={styles.centerDiv}>
        <img style={styles.img} src={user.img.imgUrl} alt={user.img.alt} />
        <h2 style={styles.center}>{user.name}</h2>
        <p style={styles.center}>{user.place}</p>
      </div>

      <div style={styles.numbers}>
        <div>
          <h3>{user.followers}</h3>
          <p>Followers</p>
        </div>
        <div>
          <h3>{user.likes}</h3>
          <p>likes</p>
        </div>
        <div>
          <h3>{user.photos}</h3>
          <p>Photos</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
    body: {
        margin: "0",
        padding:"0"
    },
    center: {
        textAlign:"center"
    },
  profileComponent: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    margin: "20px",
    maxWidth: "400px",
    minWidth:"205px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f8f9fa",
    color: "black",
    },
    centerDiv: {
        display: "flex",
        justifyContent: "center",
        alignContent:"center",
        flexDirection: "column",
        flexWrap: "wrap"
        
    },
  img: {
    maxWidth: "200px",
    borderRadius: "50%",
  },
  numbers: {
    display: "flex",
    justifyContent: "space-around",
    borderTop: "2px solid black",
  },
};

export default Profile;
