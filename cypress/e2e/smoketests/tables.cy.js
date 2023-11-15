///<reference types="cypress"/>

describe('Automation - Working With Tables in webpage', function () {

    it('Cypress Test Case - Understanding Tables in webpage', function () {


        cy.visit('https://money.rediff.com/indices/bse/sensex?src=moneyhome_bseIndices');


        //How many rows 
//         cy.xpath('//table[@class="dataTable"]/tbody/tr').should('have.length', '30');

//         //How many column 
//         cy.xpath('//table[@class="dataTable"]/thead/tr/th').should('have.length', '6');


//         cy.xpath('//table[@class="dataTable"]/tbody/tr[5]/td[3]').then((txt)=>{

//         var currentprice = txt.text()
        
//         expect(currentprice).to.equal("934.30")
     
//      })

// //         //Get row data and Validate column text

// //         cy.xpath('//table[@class="dataTable"]/tbody/tr[4]').within(() => {

// //             cy.get('td').eq(3).then((ele) => {

// //                 var text = ele.text()

// //                 cy.log(text)

// //                 expect(text).to.equal("1540.45")
// //             })

// //              cy.get('td').eq(0).should('contain.text', 'Bajaj Finserv Ltd.')

// //          })



//         //Validate data based on Cell Values 

//         cy.get('.dataTable >tbody').contains('NTPC Ltd').parent().parent().within(() => {

//             cy.get('td').eq(3).then((ele) => {

//                 cy.log("Prev price: "+ ele.text())
//             })
//         })

//   // Get entire Table Data
var  total;
        cy.get('.dataTable> tbody > tr >td:nth-child(4)')
            .each((col) => {

                cy.wrap(col).within((celldata) => {

                  var x = celldata.text()
                  var y = Number(x)

                    total = total+y
                    
                })
            })
        
            cy.log(total)



//             cy.get('.dataTable> tbody > tr')
//            c .each((rows) => {

//                 cy.wrap(rows).within((celldata) => {

//                     cy.log(celldata.text())

                    
//                 })
//             })

    })

})
