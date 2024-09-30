import React, { Component } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { QuestionsModal } from "./RatingComponent";

export class CardsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinner: false,
      showBankAccounts: false,
      showCreditCards: false,
      bankAccounts: [
        // {
        //   token: "EDEACF3654DF3AFC4A979F5FECBD79B2AF3410F5",
        //   type: "GP",
        //   accountNumber: "****0005",
        //   "card-holder-name": "Username",
        // },
      ],
      showAddPaymentOption: false,
      paymentusIFrameURL: "",
      showSurvey: false,
      cards: [],
    };
  }

  addcard() {
    // Create a new item (e.g., using the current timestamp)
    const { bankAccounts, showSurvey } = this.state;
    const newItem = {
      id: bankAccounts.length + 1,
      value: {
        token: "EDEACF3654DF3AFC4A979F5FECBD79B2AF3410F5",
        type: "GP",
        accountNumber: "****0005",
        "card-holder-name": "Username",
      },
    };

    // Update the list by adding the new item
    // this.setState({ bankAccounts: [...bankAccounts, newItem] });
    this.setState({ showSurvey: !showSurvey });
  }

  render() {
    const cards = this.state.bankAccounts;
    console.log("rendering " + JSON.stringify(this.state.bankAccounts));
    return (
      <View>
        <QuestionsModal
          showSurvey={this.state.showSurvey}
          onClose={() => {
            this.setState({ showSurvey: false });
          }}
        />
        {cards != undefined ? (
          <FlatList
            data={cards}
            keyExtractor={(item) => item.value.token.toString()}
            renderItem={({ item }) => <Text>{item.value.accountNumber}</Text>}
          />
        ) : null}

        <TouchableOpacity
          onPress={() => {
            this.addcard();
          }}
        >
          <Text>Add Card</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CardsScreen;
