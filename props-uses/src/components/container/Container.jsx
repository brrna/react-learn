import React from "react";

// burada component içinde çağırılan diğer componentin propsunu children olarak belirtmek zorundayız
function Container({children}) {
    return(
        <div>
            <div>children componenti çalıştı</div>
            {children} 
        </div>
    )
}

export default Container