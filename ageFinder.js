export const ageFinder =(dob)=>{
        const year= (dob.split('/'))[2];
        const d = new Date();
        const age=(d.getFullYear()-year);
        return age;
    }