from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/search')
def search():
    keyword = request.args.get('keyword')
    # Replace with actual API call to fetch keyword data
    data = [
        {"keyword": f"{keyword} tips", "volume": 1000, "difficulty": "Medium"},
        {"keyword": f"best {keyword}", "volume": 800, "difficulty": "Low"}
    ]
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
