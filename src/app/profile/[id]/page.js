export default function UserProfile({params}) {
    return (
      <>
        <h2>This is user profile page </h2>
        <h4>{params.id}</h4>
      </>
    );
  }
  