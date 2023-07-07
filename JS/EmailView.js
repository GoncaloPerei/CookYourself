export default class EmailView{
    constructor(root) {
        this.root = root;
        this.root.innerHTML = `
                        <form action="#" id="contacts-form">
                            <fieldset>
                                <div class="contacts-sec-form-sec-fields-wrapper">
                                    <div class="contacts-sec-form-sec-fields">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                        </svg>
                                        <input type="text" id="fname" name="fname" placeholder="Full Name...*">
                                    </div>
                                    <div class="contacts-sec-form-sec-fields">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                                        </svg>
                                        <input type="email" id="email" name="email" placeholder="Email...*">
                                    </div>
                                    <div class="contacts-sec-form-sec-fields">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-open-fill" viewBox="0 0 16 16">
                                            <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516ZM0 13.373l5.693-3.163L0 6.873v6.5Z"/>
                                        </svg>
                                        <input type="subject" id="subject" name="subject" placeholder="Subject...*">
                                    </div>
                                    <div class="contacts-sec-form-sec-fields message">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-right-text-fill" viewBox="0 0 16 16">
                                            <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z"/>
                                        </svg>
                                        <textarea id="message" name="message" placeholder="Message...*"></textarea>
                                    </div>
                                </div>
                                <input type="submit" value="SEND MESSAGE" id="submit-btn">
                            </fieldset>
                        </form>
        `;

        const iptFname = this.root.querySelector('#fname');
        const iptEmail = this.root.querySelector('#email');
        const iptSubject = this.root.querySelector('#subject');
        const iptMessage = this.root.querySelector('#message');


        /*[iptFname, iptEmail, iptSubject, iptMessage].forEach(inputField => {
            inputField.addEventListener('blur', () =>{
                this.checkFields(inputField);
            });
        });*/

        const iptForm = this.root.querySelector('#contacts-form');

        iptForm.addEventListener('submit', (form) =>{
            form.preventDefault();
            try{
                [iptFname, iptEmail, iptSubject, iptMessage].forEach(inputField => {
                    if(!this.checkFields(inputField)){
                        alert("nao nao");
                        throw Exception;
                    }
                })
                Email.send({
                    SecureToken: "90711d92-fd03-4edb-9a1e-eb2f4bf52a2c",
                    To : 'geral.cookyourself@gmail.com',
                    From : iptEmail.value,
                    Subject : iptSubject.value,
                    Body : iptMessage.value
                }).then(
                    [iptFname, iptEmail, iptSubject, iptMessage].forEach(inputField => {
                        this.clearFields(inputField);
                    })
                );
            }
            catch(e){console.log(e)}
        });
    }

    checkFields(iptField){
        if(!this.checkFname(iptField.id = 'fname')){return false;}
        if(!this.checkEmail(iptField.id = 'email')){return false;}
        if(!this.checkSubject(iptField.id = 'subject')){return false;}
        if(!this.checkMessage(iptField.id = 'message')){return false;}

        return true;
    }

    checkFname(iptField){
        const regex = /^[a-zA-Z]+$/;

        if(!this.checkifClear(iptField)){
            return false;
        }

        return regex.test(iptField.value);
    }

    checkEmail(iptField){
        //const regex = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/;

        if(!this.checkifClear(iptField)){
            return false;
        }
        return true;
        //return regex.test(iptField.value);
    }
    
    checkSubject(iptField){
        if(!this.checkifClear(iptField)){
            return false;
        }
        return true;
    }

    checkMessage(iptField){
        if(!this.checkifClear(iptField)){
            return false;
        }
        return true;
    }

    checkifClear(iptField){
        if(iptField.value == ""){
            alert(`${iptField} FIELD IS EMPTY`);
            return false;
        }
        return true;
    }

    clearFields(iptField){
        iptField.value = '';
    }
}

