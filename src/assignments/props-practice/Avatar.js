import React from "react";

/*
* This syntax is called "destructuring"
*/
export default function Avatar(props) {
    return(
       <div>
            <AvatarContd {...props}/>
       </div>
    );
    
}

function AvatarContd({person, size}) {
    return(
        <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    );
    
}

function getImageUrl(person, size = 's') {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      size +
      '.jpg'
    );
  }