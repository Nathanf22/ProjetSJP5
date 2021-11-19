import React, { Component } from "react";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import './../App.css';
import { Paper, List } from "@material-ui/core";
import { Button } from "@material-ui/core";



class Box1 extends Component {

    constructor(props){
        super(props);
        this.state = {
            nb_element : 0,
            nb_element2: 0,
            ListElement : [
                'name1'
            ],
            ListElement2: [
                'name2'
            ],
            selectedIndexElement : 0,
            selectedIndexElement2: 0
        };
        
        
    }

    addElement(idBox){
        const element = prompt("Enter a value");
        if(idBox==1){
            
            //const element = document.getElementById("input").value;
            console.log("element: "+element)
            if(element!="" && element!=undefined){
                this.setState({
             
                    nb_element: this.state.nb_element + 1,
                    ListElement: this.state.ListElement.concat(element)
                });
            }
        }
        if(idBox==2){
            if(element!=="" && element!=undefined){
                this.setState({
             
                    nb_element2: this.state.nb_element2 + 1,
                    ListElement2: this.state.ListElement2.concat(element)
                });
            }

        }

        
       // console.log(this.state.nb_element);
    }

    removeElement(type, index){
        if(type==1){
            var array = this.state.ListElement;
            //console.log(array);
            console.log("selectedIndexElement: ", this.state.selectedIndexElement);
            //var index = parseInt(this.state.selectedIndexElement);
            console.log(index);
            array.splice(index, 1);
            console.log(array);
            
            this.setState({
                nb_element: this.state.nb_element -1,
                ListElement: array,
                selectedIndexElement: this.state.selectedIndexElement -1
            })
        }
        if(type==2){
            var array = this.state.ListElement2;
            //console.log(array);
            console.log("selectedIndexElement2: ", this.state.selectedIndexElement2);
            //var index = parseInt(this.state.selectedIndexElement);
            console.log(index);
            array.splice(index, 1);
            console.log(array);
            
            this.setState({
                nb_element2: this.state.nb_element2 -1,
                ListElement2: array,
                selectedIndexElement2: this.state.selectedIndexElement2 -1
            })
        }

    }

    // getList(){
    //     return this.state.ListElement;
    // }

    // clearList(){
    //     this.setState({
    //         nb_element: 0,
    //         List_element: []
    //     })
    // }

    // fillList(list){
    //     var array = this.state.ListElement;
    //     this.setState({
    //         nb_element: -1,
    //         List_element: array.concat(list)
    //     })
    // }

    handleFocus = (idBox, k) =>{
    //   var  k = document.activeElement.key;
    if(idBox==1){
        this.setState(() =>{
            return{
                selectedIndexElement: k
            }

        });
    }
    if(idBox==2){
        this.setState(() =>{
            return{
                selectedIndexElement2: k
            }

        });
    }
        
        // console.log("key:", k);
        // console.log("selectedIndexElement: ", this.state.selectedIndexElement);

    }

    updateValue = (idBox, index) => {
        if(idBox==1){
            const val = this.state.ListElement[index];
            console.log("val: ", val);
            const new_val = prompt("Modification de la valeur", val)
            var array = this.state.ListElement;
            if(new_val!="" && new_val!=undefined){
                array[index] = new_val;
            }
            
            this.setState(() =>{
                return{
                    ListElement: array
                }
    
            }); 
        }
        if(idBox==2){
            const val = this.state.ListElement2[index];
            const new_val = prompt("Modification de la valeur", val)
            var array = this.state.ListElement2;
            if(new_val!="" && new_val!=undefined){
                array[index] = new_val;
            }
            this.setState(() =>{
                return{
                    ListElement2: array
                }
    
            });
        }


        
    }

    translate = (list1, list2, index, type) =>{
        if(type==1){
            const val = list1[index];
            console.log("val:", val)
            var array = list1;
            array.splice(index,1);
            this.setState(() =>{
                return{
                    nb_element: this.nb_element -1,
                    nb_element2: this.nb_element2 +1,
                    ListElement: array,
                    ListElement2: list2.concat(val)
                }
    
            }); 
        }
        if(type==2){
            const val = list2[index];
            console.log("val:", val)
            var array = list2;
            array.splice(index,1);
            this.setState(() =>{
                return{
                    nb_element: this.nb_element +1,
                    nb_element2: this.nb_element2 -1,
                    ListElement: list1.concat(val),
                    ListElement2: array
                }
    
            }); 
        }

    }

    // handleChange = (e) => {
    //     // console.log(e.target.value);
    //     // var value = this.state.ListElement.filter(function(item) {
    //     //   return item.key == e.target.value
    //     // })
    //    // console.log(value)
    //   }


    render(){
        const updatedList = this.state.ListElement.map((listItems, index)=>{
            return (
            <div>
                
                    <li className={index===this.state.selectedIndexElement ? 'selected': 'not_selected'} key={index} onClick={() => this.handleFocus(1, index)}>
                    {listItems}
                    </li>
                <br/>
            </div>
            )});


        const updatedList2 = this.state.ListElement2.map((listItems, index)=>{
            return (
            <div>
                
                    <li className={index===this.state.selectedIndexElement2 ? 'selected': 'not_selected'} key={index} onClick={() => this.handleFocus(2, index)}>
                    {listItems}
                    </li>
                <br/>
            </div>
            )});
        return(
            <div>
                <Box className='title' color="white" bgcolor="primary.dark" p={1}>
                    Projet SJP5
                </Box>
                <Grid container spacing={0} align="center"
  alignItems="center"
  justifyContent="center">
                    <Grid item xs={5}>
    

                        <Paper style={{maxHeight: 200, overflow: 'auto'}}>
                        <List>
                        <ul>
                        {updatedList}
                        </ul>
                        </List>
                        </Paper>
                        
                        <Box>
                        <Button variant="outlined" onClick={() => this.addElement(1)} >+</Button>
                        <Button variant="outlined" className={this.state.selectedElement==-1 ? 'disabled': 'enabled' } onClick={() => this.updateValue(1,this.state.selectedIndexElement )}>m</Button >
                        <Button variant="outlined" onClick={() => this.removeElement(1, this.state.selectedIndexElement)} >-</Button >
                        </Box>
                        
                    </Grid>
                    <Grid item xs={2} >
                        <Box>
                        <Button variant="outlined"  onClick={() => this.translate(this.state.ListElement,this.state.ListElement2, this.state.selectedIndexElement,1)}>&#62;&#62; </Button>
                        </Box>
                        <Box>
                        <Button variant="outlined"  onClick={() => this.translate(this.state.ListElement,this.state.ListElement2, this.state.selectedIndexElement2, 2)}>&#60;&#60; </Button >
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Paper style={{maxHeight: 200, overflow: 'auto'}}>
                        <List>
                        <ul>
                        {updatedList2}
                        </ul>
                        </List>
                        </Paper>
                        <Box>
                        <Button variant="outlined" onClick={() => this.addElement(2)} >+</Button >
                        <Button variant="outlined" className={this.state.selectedElement==-1 ? 'disabled': 'enabled' } onClick={() => this.updateValue(2, this.state.selectedIndexElement2)}>m</Button>
                        <Button variant="outlined" onClick={() => this.removeElement(2, this.state.selectedIndexElement2)} >-</Button >
                        </Box>
                    </Grid>
                </Grid>

                
                
               
                <br/>
                
               
                <br/>
                
                
                <hr/>


                
                <br/>

                

                <br/>
            </div>
            
        );
    }

}

export default Box1;