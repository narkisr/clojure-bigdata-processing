(defproject code "0.1.0"
  :description "Word count demo"
  :license {:name "Eclipse Public License" :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [clojure-hadoop/clojure-hadoop "1.4.1"]
                 [org.clojure/tools.cli "0.2.1"]]
  
  :plugins [[lein-tarsier "0.9.1"]]
  :aot [code.core] 
  )
