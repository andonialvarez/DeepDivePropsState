import React, {Component} from "react";
import { JournalEntry } from './journal_entry';

const rawJournalData = [
    {title: 'Post one', content: 'Post content', status: 'draft'},
    {title: 'Post two', content: 'Post blo', status: 'published'},
    {title: 'Post three', content: 'Post content', status: 'published'},
    {title: 'Post four', content: 'Post content', status: 'published'}
]


//Class component
export default class JournalList extends Component {
    constructor (props) {
        super();

        this.state = {
            journalData: rawJournalData,
            isOpen: true
        };
    }

    clearEntries = () => {
        this.setState({ journalData: [] });
      };
    
    render() {

            const journalEntries = this.state.journalData.map(journalEntry => {
                return (
                    <div key= {journalEntry.title}>
                    <JournalEntry 
                        title={journalEntry.title} 
                        content = {journalEntry.content}
                         />    
                    </div>
                )
            })
        return (
        <div><h2>{this.props.heading}</h2>
             {journalEntries}

             <button onClick={this.clearEntries}>Clear Journal Entries</button>
                </div>
                )
    }
}
