import { createContext, useState  } from "react";
import { useNavigate } from "react-router-dom";

export const ContextProvider = createContext({
  handleAnalyse: () => {},
  isAnalyzing:false,
});


function ContextWrapper({ children }) {
     const [isAnalyzing,setIsAnalyzing]=useState(false);
     const navigate=useNavigate();

    const handleAnalyse = (claimsText,ingredientsText) => {
        if (claimsText === "" || ingredientsText === "") {
          alert("Both Claims and Ingredients text must be provided!");
          return;
        }
    
        const encodedClaim = encodeURIComponent(claimsText);
        const encodedIngredients = encodeURIComponent(ingredientsText);
        const apiUrl = `https://cwbackend-a3332a655e1f.herokuapp.com/claims/analyze?claim=${encodedClaim}&ingredients=${encodedIngredients}`;
    
        setIsAnalyzing(true);
        fetch(apiUrl, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setIsAnalyzing(false);
            console.log(data);
            if (data) {
              navigate("/ClaimCheckOptions/Manualform/Output", {
                state: { data: data },
              });
            }
          })
          .catch(() => {
            setIsAnalyzing(false);
            alert("An error occurred during analysis.");
          });
      };

  return <ContextProvider.Provider value={{handleAnalyse ,isAnalyzing}}>{children}</ContextProvider.Provider>;
}

export default ContextWrapper;
