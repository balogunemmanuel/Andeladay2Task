// Javascript assignment

var note_id = [];
var note_content = [];
var author = [];

function NoteApplication(author) {
	this.Author = author;
	
	this.notes_id = note_id;
	this.notes_content = note_content;
	this.notes_author = author;
}
function create(note_content){
	notes_id.push(note_content);
}
function ListNotes(){
	console.log("Note ID" + notes_id, notes_content, + "By Author" + notes_author);
}
function get(note_id){
	len = notes_id.length;
	for (var i in len){
		if (note_id == notes_id[i]){
		    console.log(notes_content[i]);
	    }
	}
}
function search(search_text){
	len = note_content.length;
	for (var i in len){
		if (note_content.indexOf(search_text)!=-1) {
            console.log(note_content[i]);
		}
    }
}
function delet(note_id){
	len = note_content.length;
	for (var i in len){
		if (note_id == notes_id[i]){
            note_content[i].delete;
		}
    }
}
function edit(note_id, new_content){
	
}
