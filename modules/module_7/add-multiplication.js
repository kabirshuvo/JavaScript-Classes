/**
 * fixed: per item wood requirements
 * 1. chair - 3 cft
 * 2. table - 7 cft
 * 3. bed - 30 cft
 * 
 * vary : quantity
 */

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
//******* per unit variable diclaration  */
    const perChairWood = 3;
    const perTableWood = 7;
    const perBedWood = 30;
//******* multiplying unit with quantity variable diclaration */
    const chairWood = perChairWood * chairQuantity;
    const tableWood = perTableWood * tableQuantity;
    const bedWood = perBedWood * bedQuantity;
//******* total */
    const totalWood = chairWood + tableWood + bedWood;
//******* return */
    return totalWood;
}
const totalWood = woodCalculator(1, 1, 1)
console.log('total wood required:', totalWood);