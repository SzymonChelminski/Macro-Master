//CSS
import './index.css';
//COMPONENTS
import Header from "./components/Header";
import Content from './components/Content';
import { useEffect, useState} from 'react';

function App() {

// Buttons
const [popUpState, setPopUpState] = useState('none')
const [acceptState, setAcceptState] = useState('')
const [btnState, setBtnState] = useState(false)
const [inputState, setInputState] = useState('')
const [deleteDisplayState, setDeleteDisplayState] = useState({
  Breakfast: 'none',
  Snack: 'none',
  Lunch: 'none',
  Dinner: 'none',
  Supper: 'none'
})
const [settingsDisplay, setSettingsDisplay] = useState('none')

const [darkMode, setDarkMode] = useState('black')
const [normalMode, setNromalMode] = useState('#2d3965')
const [switchMode, setSwitchMode] = useState(normalMode)
const [darkModeBackgroundState, setDarkModeBackgroundState] = useState('white')

// Macros
const [ingredient, setIngredient] = useState('1 cup of water')
const [nutrientsData, setNutrientsData] = useState({})
const [itemBreakfastState, setItemBreakfastState] = useState([])
const [itemSnackState, setItemSnackState] = useState([])
const [itemLunchState, setItemLunchState] = useState([])
const [itemDinnerState, setItemDinnerState] = useState([])
const [itemSupperState, setItemSupperState] = useState([])

//Macro input
const [kcalOverallState, setKcalOverallState] = useState({
  kcalOverall: 0,
})
const [breakfast, setBreakfast] = useState({
  kcal: 0,
  protein: 0,
  carbohydrates: 0,
  fats: 0
})
const [snack, setSnack] = useState({
  kcal: 0,
  protein: 0,
  carbohydrates: 0,
  fats: 0
})
const [lunch, setLunch] = useState({
  kcal: 0,
  protein: 0,
  carbohydrates: 0,
  fats: 0
})
const [dinner, setDinner] = useState({
  kcal: 0,
  protein: 0,
  carbohydrates: 0,
  fats: 0
})
const [supper, setSupper] = useState({
  kcal: 0,
  protein: 0,
  carbohydrates: 0,
  fats: 0
})

const [changeProtein, setChangeProtein] = useState(0)
const [changeCarbohydrates, setChangeCarbohydrates] = useState(0)
const [changeFats, setChangeFats] = useState(0)
const [macroFooterValues, setMacroFooterValues] = useState({
  protein: 0,
  carbohydrates: 0,
  fats: 0
})

const [macroOverall, setMacroOverall] = useState({
  protein: 0,
  carbohydrates: 0,
  fats: 0,
})

const [bodyInputDisplayState, setBodyInputDisplayState] = useState('none')

async function getRecipe(){
  const response = await fetch(`https://api.edamam.com/api/nutrition-data?app_id=fe7959ea&app_key=798dd570e6d773bf2a852f185a73887f&nutrition-type=logging&ingr=${ingredient}`, {
    method: 'GET',
  })
  return response.json()
}

useEffect(()=>{
  setMacroOverall(prevMacro =>{
    return {
      protein: breakfast.protein + snack.protein + lunch.protein + dinner.protein + supper.protein,
      carbohydrates: breakfast.carbohydrates + snack.carbohydrates + lunch.carbohydrates + dinner.carbohydrates + supper.carbohydrates,
      fats: breakfast.fats + snack.fats + lunch.fats + dinner.fats + supper.fats,
    }
  }) 
},[kcalOverallState.kcalOverall])

useEffect(()=>{
  getRecipe().then(data=>{
    setNutrientsData(data)
  })
},[ingredient])

useEffect(()=>{
  getRecipe().then(data=>{
    setKcalOverallState(prevState =>{
      return {
        kcalOverall: prevState.kcalOverall + data.calories
      }
    })
    if(btnState === 'button_1'){
    setBreakfast(prevState =>{
      return {
        kcal: prevState.kcal + Math.floor(data.calories),
        protein: prevState.protein + Math.floor(data.totalNutrients.PROCNT.quantity),
        carbohydrates: prevState.carbohydrates + Math.floor(data.totalNutrients.CHOCDF.quantity),
        fats: prevState.fats + Math.floor(data.totalNutrients.FAT.quantity)
      }
    })
    setItemBreakfastState(prevState =>{
      return [...prevState ,({
        itemName: ingredient,
        kcal: Math.floor(data.calories),
        protein: Math.floor(data.totalNutrients.PROCNT.quantity),
        carbohydrates: Math.floor(data.totalNutrients.CHOCDF.quantity),
        fats: Math.floor(data.totalNutrients.FAT.quantity)
      })]
    })
  }
    else if(btnState === 'button_2'){
      setSnack(prevState =>{
        return {
          kcal: prevState.kcal + Math.floor(data.calories),
          protein: prevState.protein + Math.floor(data.totalNutrients.PROCNT.quantity),
          carbohydrates: prevState.carbohydrates + Math.floor(data.totalNutrients.CHOCDF.quantity),
          fats: prevState.fats + Math.floor(data.totalNutrients.FAT.quantity)
        }
      })
      setItemSnackState(prevState =>{
        return [...prevState ,({
          itemName: ingredient,
          kcal: Math.floor(data.calories),
          protein: Math.floor(data.totalNutrients.PROCNT.quantity),
          carbohydrates: Math.floor(data.totalNutrients.CHOCDF.quantity),
          fats: Math.floor(data.totalNutrients.FAT.quantity)
        })]
      })
    }
    else if(btnState === 'button_3'){
      setLunch(prevState =>{
        return {
          kcal: prevState.kcal + Math.floor(data.calories),
          protein: prevState.protein + Math.floor(data.totalNutrients.PROCNT.quantity),
          carbohydrates: prevState.carbohydrates + Math.floor(data.totalNutrients.CHOCDF.quantity),
          fats: prevState.fats + Math.floor(data.totalNutrients.FAT.quantity)
        }
      })
      setItemLunchState(prevState =>{
        return [...prevState ,({
          itemName: ingredient,
          kcal: Math.floor(data.calories),
          protein: Math.floor(data.totalNutrients.PROCNT.quantity),
          carbohydrates: Math.floor(data.totalNutrients.CHOCDF.quantity),
          fats: Math.floor(data.totalNutrients.FAT.quantity)
        })]
      })
    }
    else if(btnState === 'button_4'){
      setDinner(prevState =>{
        return {
          kcal: prevState.kcal + Math.floor(data.calories),
          protein: prevState.protein + Math.floor(data.totalNutrients.PROCNT.quantity),
          carbohydrates: prevState.carbohydrates + Math.floor(data.totalNutrients.CHOCDF.quantity),
          fats: prevState.fats + Math.floor(data.totalNutrients.FAT.quantity)
        }
      })
      setItemDinnerState(prevState =>{
        return [...prevState ,({
          itemName: ingredient,
          kcal: Math.floor(data.calories),
          protein: Math.floor(data.totalNutrients.PROCNT.quantity),
          carbohydrates: Math.floor(data.totalNutrients.CHOCDF.quantity),
          fats: Math.floor(data.totalNutrients.FAT.quantity)
        })]
      })
    }
    else if(btnState === 'button_5'){
      setSupper(prevState =>{
        return {
          kcal: prevState.kcal + Math.floor(data.calories),
          protein: prevState.protein + Math.floor(data.totalNutrients.PROCNT.quantity),
          carbohydrates: prevState.carbohydrates + Math.floor(data.totalNutrients.CHOCDF.quantity),
          fats: prevState.fats + Math.floor(data.totalNutrients.FAT.quantity)
        }
      })
      setItemSupperState(prevState =>{
        return [...prevState ,({
          itemName: ingredient,
          kcal: Math.floor(data.calories),
          protein: Math.floor(data.totalNutrients.PROCNT.quantity),
          carbohydrates: Math.floor(data.totalNutrients.CHOCDF.quantity),
          fats: Math.floor(data.totalNutrients.FAT.quantity)
        })]
      })
    }  
  })
},[acceptState])

function deleteChoosedItem_Breakfast(key){
  setKcalOverallState(prevState =>{
    return {
      kcalOverall: prevState.kcalOverall - itemBreakfastState[key].kcal
    }
  })
  setBreakfast( prevState =>{
    return {
      kcal: prevState.kcal - itemBreakfastState[key].kcal,
      protein: prevState.protein - itemBreakfastState[key].protein,
      carbohydrates: prevState.carbohydrates - itemBreakfastState[key].carbohydrates,
      fats: prevState.fats - itemBreakfastState[key].fats
    }
  })
  setTimeout(()=>itemBreakfastState.splice([key],1),0)
  setDeleteDisplayState({
    Breakfast: 'none',
    Snack: 'none',
    Lunch: 'none',
    Dinner: 'none',
    Supper: 'none'
  })
}

function deleteChoosedItem_Snack(key){
  setKcalOverallState(prevState =>{
      return {
        kcalOverall: prevState.kcalOverall - itemSnackState[key].kcal
      }
    })
    setSnack( prevState =>{
      return {
        kcal: prevState.kcal - itemSnackState[key].kcal,
        protein: prevState.protein - itemSnackState[key].protein,
        carbohydrates: prevState.carbohydrates - itemSnackState[key].carbohydrates,
        fats: prevState.fats - itemSnackState[key].fats
      }
    })
  setTimeout(()=>itemSnackState.splice([key],1),0)
  setDeleteDisplayState({
    Breakfast: 'none',
    Snack: 'none',
    Lunch: 'none',
    Dinner: 'none',
    Supper: 'none'
  })
}

function deleteChoosedItem_Lunch(key){
  setKcalOverallState(prevState =>{
      return {
        kcalOverall: prevState.kcalOverall - itemLunchState[key].kcal
      }
    })
    setLunch( prevState =>{
      return {
        kcal: prevState.kcal - itemLunchState[key].kcal,
        protein: prevState.protein - itemLunchState[key].protein,
        carbohydrates: prevState.carbohydrates - itemLunchState[key].carbohydrates,
        fats: prevState.fats - itemLunchState[key].fats
      }
    })
  setTimeout(()=>itemLunchState.splice([key],1),0)
  setDeleteDisplayState({
    Breakfast: 'none',
    Snack: 'none',
    Lunch: 'none',
    Dinner: 'none',
    Supper: 'none'
  })
}

function deleteChoosedItem_Dinner(key){
 setKcalOverallState(prevState =>{
      return {
        kcalOverall: prevState.kcalOverall - itemDinnerState[key].kcal
      }
    })
    setDinner( prevState =>{
      return {
        kcal: prevState.kcal - itemDinnerState[key].kcal,
        protein: prevState.protein - itemDinnerState[key].protein,
        carbohydrates: prevState.carbohydrates - itemDinnerState[key].carbohydrates,
        fats: prevState.fats - itemDinnerState[key].fats
      }
    })
  setTimeout(()=>itemDinnerState.splice([key],1),0)
  setDeleteDisplayState({
    Breakfast: 'none',
    Snack: 'none',
    Lunch: 'none',
    Dinner: 'none',
    Supper: 'none'
  })
}

function deleteChoosedItem_Supper(key){
    setKcalOverallState(prevState =>{
      return {
        kcalOverall: prevState.kcalOverall - itemSupperState[key].kcal
      }
    })
    setSupper( prevState =>{
      return {
        kcal: prevState.kcal - itemSupperState[key].kcal,
        protein: prevState.protein - itemSupperState[key].protein,
        carbohydrates: prevState.carbohydrates - itemSupperState[key].carbohydrates,
        fats: prevState.fats - itemSupperState[key].fats
      }
    })
   setTimeout(()=>itemSupperState.splice([key],1),0)
   setDeleteDisplayState({
     Breakfast: 'none',
     Snack: 'none',
     Lunch: 'none',
     Dinner: 'none',
     Supper: 'none'
   })
 }

const itemsBreakfast = itemBreakfastState.map((item, key) =>{
  return (
    <div className='item Breakfast' key={key} onClick={() => deleteChoosedItem_Breakfast(key)}>
    <span className='item_name'>{item ? item.itemName : ''}</span>
    <span className='item_macro'><span className='item_kcal'>{item ? item.kcal : ''}kcal </span><span className='item_protein'>P:{item ? item.protein : ''}g</span> <span className='item_carbohydrates'>C:{item ? item.carbohydrates : ''}g </span><span className='item_fats'>F:{item ? item.fats : ''}g</span></span>
  </div>
  )
})

const itemsSnack = itemSnackState.map((item, key) =>{
  return (
    <div className='item Snack' key={key} onClick={() => deleteChoosedItem_Snack(key)}>
    <span className='item_name'>{item ? item.itemName : ''}</span>
    <span className='item_macro'><span className='item_kcal'>{item ? item.kcal : ''}kcal </span><span className='item_protein'>P:{item ? item.protein : ''}g</span> <span className='item_carbohydrates'>C:{item ? item.carbohydrates : ''}g </span><span className='item_fats'>F:{item ? item.fats : ''}g</span></span>
  </div>
  )
})

const itemsLunch = itemLunchState.map((item, key) =>{
  return (
    <div className='item Lunch' key={key} onClick={() => deleteChoosedItem_Lunch(key)}>
    <span className='item_name'>{item ? item.itemName : ''}</span>
    <span className='item_macro'><span className='item_kcal'>{item ? item.kcal : ''}kcal </span><span className='item_protein'>P:{item ? item.protein : ''}g</span> <span className='item_carbohydrates'>C:{item ? item.carbohydrates : ''}g </span><span className='item_fats'>F:{item ? item.fats : ''}g</span></span>
  </div>
  )
})

const itemsDinner = itemDinnerState.map((item, key) =>{
  return (
    <div className='item Dinner' key={key} onClick={() => deleteChoosedItem_Dinner(key)}>
    <span className='item_name'>{item ? item.itemName : ''}</span>
    <span className='item_macro'><span className='item_kcal'>{item ? item.kcal : ''}kcal </span><span className='item_protein'>P:{item ? item.protein : ''}g</span> <span className='item_carbohydrates'>C:{item ? item.carbohydrates : ''}g </span><span className='item_fats'>F:{item ? item.fats : ''}g</span></span>
  </div>
  )
})

const itemsSupper = itemSupperState.map((item, key) =>{
  return (
    <div className='item Supper' key={key} onClick={() => deleteChoosedItem_Supper(key)}>
    <span className='item_name'>{item ? item.itemName : ''}</span>
    <span className='item_macro'><span className='item_kcal'>{item ? item.kcal : ''}kcal </span><span className='item_protein'>P:{item ? item.protein : ''}g</span> <span className='item_carbohydrates'>C:{item ? item.carbohydrates : ''}g </span><span className='item_fats'>F:{item ? item.fats : ''}g</span></span>
  </div>
  )
})

  return (
    <div className="App">
      <Header
        closeDelete={()=>{
          setDeleteDisplayState({
            Breakfast: 'none',
            Snack: 'none',
            Lunch: 'none',
            Dinner: 'none',
            Supper: 'none'
          })
        }}
        
        handleOptions={(e)=>{
          setSettingsDisplay('flex')
          setPopUpState('none')
          setDeleteDisplayState({
            Breakfast: 'none',
            Snack: 'none',
            Lunch: 'none',
            Dinner: 'none',
            Supper: 'none'
          })
          const spin = [
            {rotate: '0deg'},
            {rotate: '180deg'}
          ]

          const spinOptions = {
            duration: 600,
            iterations: 1,
          }
          e.target.animate(spin, spinOptions)
          setBodyInputDisplayState('none')
      }} 
        darkStyle={switchMode}
        />
      <Content
      // Buttons
        closeDarkMode={()=>{
          setSettingsDisplay('none')
          setBodyInputDisplayState('none')
        }}
        darkStyle={switchMode}

        darkModeBackground={darkModeBackgroundState}
      
        handleDarkMode={(e)=>{
          switchMode === normalMode ? e.target.innerText = 'Disable dark mode' : e.target.innerText = 'Enable dark mode'
          switchMode === normalMode ? setSwitchMode(darkMode) : setSwitchMode(normalMode)
          switchMode === normalMode ? setDarkModeBackgroundState('rgb(232, 232, 232)') : setDarkModeBackgroundState('white')
          setSettingsDisplay('none')
        }}

        optionsDisplay={settingsDisplay}
        input={e => setInputState(e.target.value)}
        inputValue={inputState}

        popUpState={{
          display: popUpState
        }}
        open={(e) => {
          setInputState('')
          setPopUpState('block')
          setBtnState(e.target.id)
          setDeleteDisplayState({
            Breakfast: 'none',
            Snack: 'none',
            Lunch: 'none',
            Dinner: 'none',
            Supper: 'none'
          })
          setSettingsDisplay('none')
          setBodyInputDisplayState('none')
        }}
        close={() => {
          setPopUpState('none')
          setNutrientsData('')
        }}
        blur={() => {
          setPopUpState('none')
          setNutrientsData('')
        }}
        accept={() => {
          setPopUpState('none')
          setAcceptState(prevState => !prevState)
        }}
        delete={(e)=>{
          switch(e.target.id){
            case 'delete_1':
              if(itemBreakfastState.length>0){
              setDeleteDisplayState(prevState=>{
                return {
                  Breakfast: 'block',
                  Snack: 'none',
                  Lunch: 'none',
                  Dinner: 'none',
                  Supper: 'none'
                }
              })}
            break;
            case 'delete_2':
              if(itemSnackState.length>0){
              setDeleteDisplayState(prevState=>{
                return {
                  Breakfast: 'none',
                  Snack: 'block',
                  Lunch: 'none',
                  Dinner: 'none',
                  Supper: 'none'
                }
              })}
            break;
            case 'delete_3':
              if(itemLunchState.length>0){
              setDeleteDisplayState(prevState=>{
                return {
                  Breakfast: 'none',
                  Snack: 'none',
                  Lunch: 'block',
                  Dinner: 'none',
                  Supper: 'none'
                }
              })}
            break;
            case 'delete_4':
              if(itemDinnerState.length>0){
              setDeleteDisplayState(prevState=>{
                return {
                  Breakfast: 'none',
                  Snack: 'none',
                  Lunch: 'none',
                  Dinner: 'block',
                  Supper: 'none'
                }
              })}
            break;
            case 'delete_5':
              if(itemSupperState.length>0){
              setDeleteDisplayState(prevState=>{
                return {
                  Breakfast: 'none',
                  Snack: 'none',
                  Lunch: 'none',
                  Dinner: 'none',
                  Supper: 'block'
                }
              })}
            break;
            default:
              console.log('default')
          }
          setPopUpState('none')
          setSettingsDisplay('none')
          setBodyInputDisplayState('none')
        }}

        closeDelete={()=>{
          setDeleteDisplayState({
            Breakfast: 'none',
            Snack: 'none',
            Lunch: 'none',
            Dinner: 'none',
            Supper: 'none'
          })
          setSettingsDisplay('none')
        }}
        
      // Macros 
        search={(e) => {
          if(e.key === 'Enter'){
            setIngredient(e.target.value)
          }
        }}
        // Meal
        itemsContentBreakfast={itemsBreakfast}
        itemsContentSnack={itemsSnack}
        itemsContentLunch={itemsLunch}
        itemsContentDinner={itemsDinner}
        itemsContentSupper={itemsSupper}

        popBreakfastState={deleteDisplayState.Breakfast}
        popSnackState={deleteDisplayState.Snack}
        popLunchState={deleteDisplayState.Lunch}
        popDinnerState={deleteDisplayState.Dinner}
        popSupperstate={deleteDisplayState.Supper}
        //KcalOverall
        kcalOverall={kcalOverallState.kcalOverall}
        // Breakfast
        kcalBreakfast={breakfast.kcal}
        proteinBreakfast={breakfast.protein}
        carbohydratesBreakfast={breakfast.carbohydrates}
        fatsBreakfast={breakfast.fats}
        // Snack
        kcalSnack={snack.kcal}
        proteinSnack={snack.protein}
        carbohydratesSnack={snack.carbohydrates}
        fatsSnack={snack.fats}
        // Lunch
        kcalLunch={lunch.kcal}
        proteinLunch={lunch.protein}
        carbohydratesLunch={lunch.carbohydrates}
        fatsLunch={lunch.fats}
        // Dinner
        kcalDinner={dinner.kcal}
        proteinDinner={dinner.protein}
        carbohydratesDinner={dinner.carbohydrates}
        fattDinner={dinner.fats}        
        // Supper
        kcalSupper={supper.kcal}
        proteinSupper={supper.protein}
        carbohydratesSupper={supper.carbohydrates}
        fatsSupper={supper.fats}   

        // Label
        amount={nutrientsData.totalNutrients ? `${Math.floor(nutrientsData.totalWeight)}g` :'--%'}
        kcal={nutrientsData.totalNutrients ? nutrientsData.calories :'--%'}
        fats={nutrientsData.totalNutrients ? `${Math.floor(nutrientsData.totalNutrients.FAT.quantity)}${nutrientsData.totalNutrients.FAT.unit}` : '--%'}
        saturatedFats={nutrientsData.totalNutrients ? `${Math.floor(nutrientsData.totalNutrients.FASAT.quantity)}${nutrientsData.totalNutrients.FASAT.unit}` : '--%'}
        transFats={nutrientsData.totalNutrients ? `${Math.floor(nutrientsData.totalNutrients.FAMS.quantity)}${nutrientsData.totalNutrients.FAMS.unit}` : '--%'}
        cholesterol={nutrientsData.totalNutrients ? `${Math.floor(nutrientsData.totalNutrients.CHOLE.quantity)}${nutrientsData.totalNutrients.CHOLE.unit}` : '--%'}
        sodium={nutrientsData.totalNutrients ? `${Math.floor(nutrientsData.totalNutrients.NA.quantity)}${nutrientsData.totalNutrients.NA.unit}` : '--%'}
        carbohydrates={nutrientsData.totalNutrients ? `${Math.floor(nutrientsData.totalNutrients.CHOCDF.quantity)}${nutrientsData.totalNutrients.CHOCDF.unit}` : '--%'}
        dietaryFiber={nutrientsData.totalNutrients ? `${Math.floor(nutrientsData.totalNutrients.FIBTG.quantity)}${nutrientsData.totalNutrients.FIBTG.unit}` : '--%'}
        totalSugars={nutrientsData.totalNutrients ? `${Math.floor(nutrientsData.totalNutrients.SUGAR.quantity)}${nutrientsData.totalNutrients.SUGAR.unit}` : '--%'}
        protein={nutrientsData.totalNutrients ? `${Math.floor(nutrientsData.totalNutrients.PROCNT.quantity)}${nutrientsData.totalNutrients.PROCNT.unit}` : '--%'}
        vitaminA={nutrientsData.totalNutrients ? `${Math.floor(nutrientsData.totalNutrients.VITA_RAE.quantity)}${nutrientsData.totalNutrients.VITA_RAE.unit}` : '--%'}
        vitaminB={nutrientsData.totalNutrients ? `${Math.floor(nutrientsData.totalNutrients.VITB12.quantity)}${nutrientsData.totalNutrients.VITB12.unit}` : '--%'}
        vitaminC={nutrientsData.totalNutrients ? `${Math.floor(nutrientsData.totalNutrients.VITC.quantity)}${nutrientsData.totalNutrients.VITC.unit}` : '--%'}
        vitaminD={nutrientsData.totalNutrients ? `${Math.floor(nutrientsData.totalNutrients.VITD.quantity)}${nutrientsData.totalNutrients.VITD.unit}` : '--%'}
        calcium={nutrientsData.totalNutrients ? `${Math.floor(nutrientsData.totalNutrients.CA.quantity)}${nutrientsData.totalNutrients.CA.unit}` : '--%'}
        iron={nutrientsData.totalNutrients ? `${Math.floor(nutrientsData.totalNutrients.FE.quantity)}${nutrientsData.totalNutrients.FE.unit}` : '--%'}
        potassium={nutrientsData.totalNutrients ? `${Math.floor(nutrientsData.totalNutrients.K.quantity)}${nutrientsData.totalNutrients.K.unit}` : '--%'}

        // inputs
        
        handleChangeProtein={(e)=>setChangeProtein(e.target.value)}
        handleChangeCarbohydrates={(e)=>setChangeCarbohydrates(e.target.value)}
        handleChangeFats={(e)=>setChangeFats(e.target.value)}


        handleSet={()=>{
          setMacroFooterValues(newValues =>{
            return {
              protein: changeProtein,
              carbohydrates: changeCarbohydrates,
              fats: changeFats
            }
          })
          setBodyInputDisplayState('none')
        }}
          
        changeProtein={changeProtein}
        changeCarbohydrates={changeCarbohydrates}
        changeFats={changeFats}

        overallProtein={macroOverall.protein}
        overallCarbohydrates={macroOverall.carbohydrates}
        overallFats={macroOverall.fats}
        
        footerProtein={macroFooterValues.protein}
        footerCarbohydrates={macroFooterValues.carbohydrates}
        footerFats={macroFooterValues.fats}

        proteinWidth={(macroOverall.protein/macroFooterValues.protein)*100}
        carbohydratesWidth={(macroOverall.carbohydrates/macroFooterValues.carbohydrates)*100}
        fatsWidth={(macroOverall.fats/macroFooterValues.fats)*100}

        closeMacroInput={()=>setBodyInputDisplayState('none')}

        handleUserMacro={()=>{
          setBodyInputDisplayState('block')
        }}

        bodyInputDisplay={bodyInputDisplayState}
      />
    </div>
  );
}

export default App;
