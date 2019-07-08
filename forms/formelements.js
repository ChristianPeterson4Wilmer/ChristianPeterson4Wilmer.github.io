function buildLabel(parentId, labelText = "generated label", customLabelClass = "basicform", addLabelStyles = "") {
    var label = document.createElement('label');
    label.setAttribute("id", customLabelClass);
    label.setAttribute("style", addLabelStyles);
    label.appendChild(document.createTextNode(labelText));

    document.getElementById(parentId).appendChild(label);
}

function buildTextField(parentId, inputName = "generatedTextField", labelText = "generatedLabel", isRequired = false, customInputClass = "basicform",  
     customLabelClass = "basicform", addInputStyles = "", addLabelStyles = "") {

    buildLabel(parentId, labelText, customLabelClass, addLabelStyles);
    buildNewLine(parentId);
    var textBox = document.createElement('input');
    textBox.setAttribute("class", customInputClass);
    textBox.setAttribute("name", inputName);
    textBox.setAttribute("style", addInputStyles);
    textBox.setAttribute("required", isRequired);
    document.getElementById(parentId).appendChild(textBox);
    buildNewLine(parentId);
}

function buildTextArea(parentId, textAreaForm, inputName = "generatedTextArea", labelText = "generatedLabel", isRequired = false, customInputClass = "basicform", customLabelClass = "basicform", 
    addInputStyles = "", addLabelStyles = "") {
    
    buildLabel(parentId, labelText, customLabelClass, addLabelStyles);

    var textArea = document.createElement('textarea');
    textArea.setAttribute("class", customInputClass);
    textArea.setAttribute("name", inputName);
    textArea.setAttribute("form", textAreaForm);
    textArea.setAttribute("style", addInputStyles);
    textArea.setAttribute("required", isRequired);

    document.getElementById(parentId).appendChild(textArea);
}

function buildNewLine(parentId) {
    var newline = document.createElement("br");

    document.getElementById(parentId).appendChild(newline);
}

function buildUserInformationForms(parentId) {
    buildHeader(parentId, "Your Information");
    buildTextField(parentId, "user-name", "First & Last Name", true);
    buildTextField(parentId, "email", "Email", true);
}

function buildHeader(parentId, text) {
    var header = document.createElement("h2");
    header.setAttribute("style", "color: white;");
    header.appendChild(document.createTextNode(text));

    document.getElementById(parentId).appendChild(header);
}