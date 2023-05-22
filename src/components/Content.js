import React from 'react'

export default function Content(props) {
  return (
    <div className='content'>
        <div className='content_header' onClick={props.closeDelete} style={{backgroundColor: `${props.darkStyle}`}}>
            <span>
              <span className='letter_spacing_el'>MEALS</span>
              <span className='vertical_bar'> | </span>
              <span className='total_kcal'>{props.kcalOverall} kcal</span>
            </span>
            <i className="fa-solid fa-user-pen" onClick={props.handleUserMacro}></i>
        </div>
        <div className='content_body' onClick={props.closeDarkMode} style={{backgroundColor: `${props.darkModeBackground}`}}>
        <div className='meal_el'>
              <span>Breakfast
                <p className='meal_kcal'>{props.kcalBreakfast} kcal <span className='meal_macro'><span className='protein_macro_meal'>P: {props.proteinBreakfast}g</span> <span className='carbohydrates_macro_meal'>C: {props.carbohydratesBreakfast}g</span> <span className='fats_macro_meal'>F: {props.fatsBreakfast}g</span></span></p>
              </span>
              <div className='buttons_meal'>
                <i className="fa-solid fa-circle-minus" onClick={props.delete} id='delete_1'></i>
                <i className="fa-solid fa-circle-plus" onClick={props.open} id='button_1'></i>
              </div>
          </div>
          <div className='meal_el'>
              <span>Snack
                <p className='meal_kcal'>{props.kcalSnack} kcal <span className='meal_macro'><span className='protein_macro_meal'>P:  {props.proteinSnack}g</span> <span className='carbohydrates_macro_meal'>C: {props.carbohydratesSnack}g </span><span className='fats_macro_meal'>F: {props.fatsSnack}g</span></span></p>
              </span>
              <div className='buttons_meal'>
                <i className="fa-solid fa-circle-minus" onClick={props.delete} id='delete_2'></i>
                <i className="fa-solid fa-circle-plus" onClick={props.open} id='button_2'></i>
              </div>
          </div>
          <div className='meal_el'>
              <span>Lunch
                <p className='meal_kcal'>{props.kcalLunch} kcal <span className='meal_macro'><span className='protein_macro_meal'>P:  {props.proteinLunch}g</span> <span className='carbohydrates_macro_meal'>C:  {props.carbohydratesLunch}g</span> <span className='fats_macro_meal'>F:  {props.fatsLunch}g</span></span></p>
              </span>
              <div className='buttons_meal'>
                <i className="fa-solid fa-circle-minus" onClick={props.delete} id='delete_3'></i>
                <i className="fa-solid fa-circle-plus" onClick={props.open} id='button_3'></i>
              </div>
          </div>
          <div className='meal_el'>
              <span>Dinner
                <p className='meal_kcal'>{props.kcalDinner} kcal <span className='meal_macro'><span className='protein_macro_meal'>P:  {props.proteinDinner}g</span> <span className='carbohydrates_macro_meal'>C:  {props.carbohydratesDinner}g</span> <span className='fats_macro_meal'>F: {props.fatsDinner}g</span></span></p>
              </span>
              <div className='buttons_meal'>
                <i className="fa-solid fa-circle-minus" onClick={props.delete} id='delete_4'></i>
                <i className="fa-solid fa-circle-plus" onClick={props.open} id='button_4'></i>
              </div>
          </div>
          <div className='meal_el'>
              <span>Supper
                <p className='meal_kcal'>{props.kcalSupper} kcal <span className='meal_macro'><span className='protein_macro_meal'>P: {props.proteinSupper}g</span> <span className='carbohydrates_macro_meal'>C: {props.carbohydratesSupper}g</span> <span className='fats_macro_meal'>F: {props.fatsSupper}g</span> </span></p>
              </span>
              <div className='buttons_meal'>
                <i className="fa-solid fa-circle-minus" onClick={props.delete} id='delete_5'></i>
                <i className="fa-solid fa-circle-plus" onClick={props.open} id='button_5'></i>
              </div>
          </div>
        </div>
        <div className='content_footer' onClick={props.closeDelete} style={{backgroundColor: `${props.darkStyle}`}}>
          <div className='footer_macro'>
            <span>P</span>
          <div className='proteins'>
          <div className='macro_level'>{props.overallProtein}/{props.footerProtein}g</div>
              <div className='proteins_level' style={{width: `${props.proteinWidth}%`}}>
                </div>             
            </div>
          </div>
            <div className='footer_macro'>
              <span>C</span>
            <div className='carbohydrates'>
            <div className='macro_level'>{props.overallCarbohydrates}/{props.footerCarbohydrates}g</div>
                <div className='carbohydrates_level' style={{width: `${props.carbohydratesWidth}%`}}>
                </div>
            </div>
            </div>
            <div className='footer_macro'>
              <span>F</span>
            <div className='fats'>
            <div className='macro_level'>{props.overallFats}/{props.footerFats}g</div>
                <div className='fats_level' style={{width: `${props.fatsWidth}%`}}>
                </div>
            </div>
            </div>
        </div>
        <div className='popUp' onBlur={props.blur} style={props.popUpState}>
          <div className='popUp_header' style={{backgroundColor: `${props.darkStyle}`}}>
              <div className='search_container'>
              <input type='text' placeholder='e.g. 1 cup of water' className='searchbar' onKeyDown={props.search} onChange={props.input} value={props.inputValue}/>
              <i className="fa-solid fa-check" onMouseDown={props.accept} onClick={props.accept}></i>
              <i className="fa-solid fa-xmark" onClick={props.close}></i>
              </div>
          </div>
          <div className='popUp_label' style={{backgroundColor: `${props.darkModeBackground}`}}>
              <div className='lable_element'>
              <span className='lable_macro bold'>Amount per</span>
              <span className='lable_quantity bold'>{props.amount}</span>
              </div>
              <div className='label_hr'></div>
              <div className='lable_element'>
              <span className='lable_macro bold kcal'>Calories</span>
              <span className='lable_quantity bold kcal'>{props.kcal}</span>
              </div>
              <div className='label_hr'></div>
              <div className='lable_element'>
              <span className='lable_macro bold'>Total Fat</span>
              <span className='lable_quantity'>{props.fats}</span>
              </div>
              <div className='label_hr'></div>
              <div className='lable_element'>
              <span className='lable_macro label_sub_macro'>Saturated Fat</span>
              <span className='lable_quantity'>{props.saturatedFats}</span>
              </div>
              <div className='label_hr'></div>
              <div className='lable_element'>
              <span className='lable_macro label_sub_macro'>Trans Fat</span>
              <span className='lable_quantity'>{props.transFats}</span>
              </div>
              <div className='label_hr'></div>
              <div className='lable_element'>
              <span className='lable_macro label_sub_macro'>Cholesterol</span>
              <span className='lable_quantity'>{props.cholesterol}</span>
              </div>
              <div className='label_hr'></div>
              <div className='lable_element'>
              <span className='lable_macro label_sub_macro'>Sodium</span>
              <span className='lable_quantity'>{props.sodium}</span>
              </div>
              <div className='label_hr'></div>
              <div className='lable_element'>
              <span className='lable_macro bold'>Total Carbohydrates</span>
              <span className='lable_quantity'>{props.carbohydrates}</span>
              </div>
              <div className='label_hr'></div>
              <div className='lable_element'>
              <span className='lable_macro label_sub_macro'>Dietary Fiber</span>
              <span className='lable_quantity'>{props.dietaryFiber}</span>
              </div>
              <div className='label_hr'></div>
              <div className='lable_element'>
              <span className='lable_macro label_sub_macro'>Total Sugars</span>
              <span className='lable_quantity'>{props.totalSugars}</span>
              </div>
              <div className='label_hr'></div>
              <div className='lable_element'>
              <span className='lable_macro bold'>Proteins</span>
              <span className='lable_quantity'>{props.protein}</span>
              </div>
              <div className='label_hr'></div>
              <div className='lable_element'>
              <span className='lable_macro label_sub_macro'>Vitamin A12</span>
              <span className='lable_quantity'>{props.vitaminA}</span>
              </div>
              <div className='label_hr'></div>
              <div className='lable_element'>
              <span className='lable_macro label_sub_macro'>Vitamin B</span>
              <span className='lable_quantity'>{props.vitaminB}</span>
              </div>
              <div className='label_hr'></div>
              <div className='lable_element'>
              <span className='lable_macro label_sub_macro'>Vitamin C</span>
              <span className='lable_quantity'>{props.vitaminC}</span>
              </div>
              <div className='label_hr'></div>
              <div className='lable_element'>
              <span className='lable_macro label_sub_macro'>Vitamin D</span>
              <span className='lable_quantity'>{props.vitaminD}</span>
              </div>
              <div className='label_hr'></div>
              <div className='lable_element'>
              <span className='lable_macro label_sub_macro'>Calcium</span>
              <span className='lable_quantity'>{props.calcium}</span>
              </div>
              <div className='label_hr'></div>
              <div className='lable_element'>
              <span className='lable_macro label_sub_macro'>Iron</span>
              <span className='lable_quantity'>{props.iron}</span>
              </div>
              <div className='label_hr'></div>
              <div className='lable_element'>
              <span className='lable_macro label_sub_macro'>potassium</span>
              <span className='lable_quantity'>{props.potassium}</span>
              </div>
          </div>
        </div>
        <div className='deletePopUp' style={{display: props.popBreakfastState}}>
                <div className='header_deletePopUp'>
                  Chose item to delete
                </div>
                <div className='content_deletePopUp'>
                    {props.itemsContentBreakfast}
                </div>
          </div>
          <div className='deletePopUp' style={{display: props.popSnackState}}>
                <div className='header_deletePopUp'>
                  Chose item to delete
                </div>
                <div className='content_deletePopUp'>
                    {props.itemsContentSnack}
                </div>
          </div>
          <div className='deletePopUp' style={{display: props.popLunchState}}>
                <div className='header_deletePopUp'>
                  Chose item to delete
                </div>
                <div className='content_deletePopUp'>
                    {props.itemsContentLunch}
                </div>
          </div>
          <div className='deletePopUp' style={{display: props.popDinnerState}}>
                <div className='header_deletePopUp'>
                  Chose item to delete
                </div>
                <div className='content_deletePopUp'>
                    {props.itemsContentDinner}
                </div>
          </div>
          <div className='deletePopUp' style={{display: props.popSupperstate}}>
                <div className='header_deletePopUp'>
                  Chose item to delete
                </div>
                <div className='content_deletePopUp'>
                    {props.itemsContentSupper}
                </div>
          </div>
          <div className='options' style={{display: `${props.optionsDisplay}`, backgroundColor: `${props.darkStyle}`}}>
            <div className='options_header'>Settings:</div>
            <div className='dark_mode' onClick={props.handleDarkMode}>Enable dark mode</div>
          </div>
          <div className='body_input' style={{display: `${props.bodyInputDisplay}`}}>
            <div className='body_input_header' style={{backgroundColor: `${props.darkStyle}`}}>
              <span>Set your daily goals <i className="fa-solid fa-xmark" onClick={props.closeMacroInput}></i></span>
            </div>
            <div className='body_input_content' style={{backgroundColor: `${props.darkModeBackground}`}}>
              <div className='body_input_el'>
                <span>Protein:</span>
                <input type='number' defaultValue={props.changeProtein}  onChange={props.handleChangeProtein} min='1'/>
              </div>
              <div className='body_input_el'>
              <span>Carbohydates:</span>
              <input type='number' defaultValue={props.changeCarbohydrates}   onChange={props.handleChangeCarbohydrates} min='1'/>
                </div>
                <div className='body_input_el'>
                <span>Fats:</span>
                <input type='number' defaultValue={props.changeFats}  onChange={props.handleChangeFats} min='1'/>
                </div>
                <button onClick={props.handleSet}>Set</button>
            </div>
          </div>
    </div>
  )
}