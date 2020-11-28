from flask import Flask, render_template
import pandas as pd
import json

import os

df = pd.read_csv("data/whole_data_named.csv", index_col=0)
df.loc[df["subject"].isna(), "subject"] = "no_title"
app = Flask(__name__)


@app.route("/")
@app.route("/get_feed", methods=["GET", "POST"])
def get_feed() -> list():
    c = 0
    feed = list()
    for them in df.sort_values(by="date", ascending=False)["subject"].unique():

        subject = df.loc[df["subject"] == them].sort_values(by="date", ascending=False)

        c1 = 0
        list_of_letters = list()
        for letter in subject.values:
            list_of_letters.append(
                {
                    "id": c1,
                    "date": letter[4],
                    "text": letter[-2],
                    "sender_name": letter[-1],
                    "sender_email": letter[0],
                    "recipients": letter[2],
                }
            )
            c1 += 1

        feed.append(
            {
                "id": c,
                "date": subject.iloc[0]["date"],
                "title": them,
                "last_sender_name": subject.iloc[0]["from_name"],
                "last_sender_mail": subject.iloc[0]["from"],
                "letters_count": len(list_of_letters),
                "letters": list_of_letters,
            }
        )
        c += 1
    return json.dumps(feed)  # {'test': 'test'}


if __name__ == "__main__":
    app.run('0.0.0.0', debug=False)
