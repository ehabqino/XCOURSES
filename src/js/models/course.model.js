


define([], 
    function() {
        class CourseModel{
            constructor(){
                this.serverUrl = "http://localhost:2480/";

            }
            
            //to connect to api or database
            initializeModelCollection(endpoint){
                this.courseModelDef = oj.Model.extend({
                    url : endpoint,
                    idAttribute : "@rid"
                });
                this.courseCollDef = oj.Collection.extend({
                    url : endpoint,
                    comparator : "@rid",
                    model : new this.courseModelDef

                });
                this.courses = new this.courseCollDef;
                

            }

            //
            getCoursesMenu(notify){
                
                let api_url = this.serverUrl + "query/ehabcourses/sql/SELECT FROM course";
                this.initializeModelCollection(api_url);
                let courseRow = new this.courseModelDef({},this.courses);
                courseRow.fetch({
                    success : (coll,data)=>{
                        console.log("Success");
                        console.log(data);

                    },
                    error : (model,xhr,options)=>{
                        console.log("Error");
                        console.log(options);
                    },
                    Headers : {
                        'Authorization': 'Basic cm9vdDpyb290cHdk',
                        'Content-Type':'application/json'

                        //if i want to manual encrypt user name and password
                        //'Authorization' : 'Basec'+btoa('root:rootpwd') 
                    }
                });//end fetch
                
                let navData = [
                    { path: '', redirect: 'dashboard' },
                    { path: 'dashboard', detail: { label: 'Dashboard', iconClass: 'oj-ux-ico-bar-chart' } },
                ];
                notify(navData);

            }
             
            //
            getCoursesList(notify){

            }

            //
            addCourses(id,title,description,notify){

            }

            //
            updateCourse(id,title,description,notify){

            }

            //
            deleteCourse(id,notify){

            }

        }
        return new CourseModel;
        // Ehab Qino from
    
});